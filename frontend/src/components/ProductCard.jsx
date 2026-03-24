import React from "react";
import "../App.css";
import "./ProductCard.css";
import PaymentButton from "./paymentButton";

const ProductCard = ({ product, onBuy }) => {
  const {  price, title, description } = product;

  return (
    <article className="product-card">
      <div className="product-media">
        <img src={product.image} alt={title} />
      </div>
      <div className="product-body">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        <div className="product-footer">
          <div className="price">
            <span className="amount">
              {price.currency} {price.amount/100}
            </span>
          </div>
          <PaymentButton onClick={onBuy} />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
