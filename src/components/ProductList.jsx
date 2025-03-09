import { useEffect, useState } from "react";

const ProductList = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return <div>{children(products, setProducts)}</div>;
};

export default ProductList;