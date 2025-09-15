import React from "react";
import { useCart } from "../Context/CartContext";
import { Pizza } from "../types/cart";
import { useNavigate } from "react-router-dom";

interface Props {
  pizza: Pizza;
}

const PizzaCard: React.FC<Props> = ({ pizza }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(pizza);    // Add pizza to cart
    navigate("/cart");   // Go to Cart page
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h3>{pizza.name}</h3>
      <p>${pizza.price}</p>
      <button
        onClick={handleAddToCart}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          backgroundColor: "#f87171",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PizzaCard;
