const ProductItem = ({ product, onDelete }) => {
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h3>{product.name}</h3>
        <img src={product.image} alt={product.name} width="150" />
        <p>{product.description}</p>
        <p>Цена: ${product.price}</p>
        <button onClick={() => onDelete(product.id)}>Удалить</button>
      </div>
    );
  };
  
  export default ProductItem;