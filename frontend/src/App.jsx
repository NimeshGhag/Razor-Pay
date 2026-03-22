import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

const sampleProducts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1606813902947-8d7a2f0b7f5a?w=1200&q=80&auto=format&fit=crop",
    price: { amount: "49.00", currency: "$" },
    title: "Wireless Headphones",
    description: "Comfortable over-ear headphones with long battery life.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1526178615308-5e3a9d6d4f8b?w=1200&q=80&auto=format&fit=crop",
    price: { amount: "24.50", currency: "$" },
    title: "Minimalist Wallet",
    description: "Slim leather wallet to carry essentials without bulk.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80&auto=format&fit=crop",
    price: { amount: "89.99", currency: "$" },
    title: "Smart Watch",
    description: "Track workouts, notifications, and heart rate all day.",
  },
];

const App = () => {
  const handleBuy = (product) => {
    console.log("Purchasing:", product);
    alert(
      `Purchased ${product.title} for ${product.price.currency}${product.price.amount}. Thank you!`,
    );
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Shop</h1>
      </header>

      <main className="product-grid">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} onBuy={handleBuy} />
        ))}
      </main>
    </div>
  );
};

export default App;
