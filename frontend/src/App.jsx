import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ProductCard from "./components/ProductCard";



const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBuy = (product) => {
    console.log("Purchasing:", product);
    alert(
      `Purchased ${product.title} for ${product.price.currency}${product.price.amount/100}. Thank you!`,
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          "http://localhost:3000/api/products/product",
        );
        const p = res.data && res.data.product;
        if (p) setProducts(Array.isArray(p) ? p : [p]);
        console.log("Fetched products:", p);
      } catch (err) {
        setError(err.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Shop</h1>
      </header>

      <main className="product-grid">
        {loading && <p>Loading products...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!loading &&
          !error &&
          products.map((p) => (
            <ProductCard key={p._id || p.id} product={p} onBuy={handleBuy} />
          ))}
      </main>
    </div>
  );
};

export default App;
