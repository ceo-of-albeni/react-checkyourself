import React, { useState } from "react";

const Card = ({ createProduct }) => {
  const [product, setProduct] = useState("");

  function isEmpty() {
    if (!product.trim()) {
      alert("Input is empty!");
      return;
    }

    const newProduct = {
      name: product,
      id: Date.now(),
    };

    createProduct(newProduct);

    setProduct("");
  }
  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="name"
        onChange={e => setProduct(e.target.value)}
        value={product}
      />
      <button onClick={isEmpty}>Add</button>
    </div>
  );
};

export default Card;
