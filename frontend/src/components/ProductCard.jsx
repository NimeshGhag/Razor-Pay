import React from "react";
import "../App.css";
import "./ProductCard.css";

const ProductCard = ({ product, onBuy }) => {
  const { image, price, title, description } = product;

  return (
    <article className="product-card">
      <div className="product-media">
        <img src={image} alt={title} />
      </div>
      <div className="product-body">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        <div className="product-footer">
          <div className="price">
            <span className="amount">
              {price.currency} {price.amount}
            </span>
          </div>
          <button className="buy-btn" onClick={() => onBuy(product)}>
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
