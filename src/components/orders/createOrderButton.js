import React, { useState } from "react";
import OrderForm from "./orderForm";

export default function CreateOrderButton() {
  const [showOrderModal, setShowOrderModal] = useState(false);

  const handleButtonClick = () => {
    setShowOrderModal(true);
    console.log("HEHEHE");
  };

  return (
    <div>
      <button
        className="bg-white border border-gray-500 px-4 py-2 rounded-full shadow-lg"
        onClick={handleButtonClick}
      >
        +Create Order
      </button>
      {showOrderModal && <OrderForm />}
    </div>
  );
}
