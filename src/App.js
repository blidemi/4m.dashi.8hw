import ProductList from "./components/ProductList";
import ProductItem from "./components/ProductItem";
import AddProductForm from "./components/AddProductForm";

const App = () => {
  const handleAddProduct = (newProduct, setProducts) => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newProduct, id: Date.now() }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts((prevProducts) => [...prevProducts, data]);
      });
  };

  const handleDeleteProduct = (id, setProducts) => {
    fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" })
      .then(() => {
        setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
      });
  };

  return (
    <div>
      <h1>Список товаров</h1>
      <ProductList>
        {(products, setProducts) => (
          <>
            <AddProductForm onAdd={(newProduct) => handleAddProduct(newProduct, setProducts)} />
            {products.map((product) => (
              <ProductItem key={product.id} product={product} onDelete={(id) => handleDeleteProduct(id, setProducts)} />
            ))}
          </>
        )}
      </ProductList>
    </div>
  );
};

export default App;