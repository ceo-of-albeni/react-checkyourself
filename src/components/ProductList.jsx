import React from "react";

const ProductList = ({ products, deleteProduct }) => {
  return (
    <>
      {products.map(item => {
        return (
          <ul key={item.id}>
            <li key={item.id}>{item.name}</li>
            <button onClick={() => deleteProduct(item.id)}>Delete</button>
          </ul>
        );
      })}
    </>
  );
};

export default ProductList;
