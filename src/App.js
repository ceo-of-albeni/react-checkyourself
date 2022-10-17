import React, { useState } from "react";
import Task1 from "./components/Task1";
import Card from "./components/Card";
import ProductList from "./components/ProductList";

const App = () => {
  const [show, setShow] = useState(true);
  const [products, setProducts] = useState([]);

  function hideButton() {
    setShow(!show);
  }

  function createProduct(newObj) {
    let newProducts = [...products];
    newProducts.push(newObj);
    setProducts(newProducts);
  }

  function deleteProduct(id) {
    let newProducts = [...products];
    newProducts = newProducts.filter(item => item.id !== id);
    setProducts(newProducts);
  }

  return (
    <div>
      <Task1 hideButton={hideButton} show={show} />
      <Card createProduct={createProduct} />
      <ProductList deleteProduct={deleteProduct} products={products} />
    </div>
  );
};

export default App;
