import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Products = () => {
  const { id } = useParams();

  // Carregamento de um dado individual
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro... </p>}
      {loading && <p>Loading, wait a minute...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>

          {/* Nested Route */}
          <Link to={`/products/${product.id}/info`}>More Info</Link>
        </div>
      )}
    </>
  );
};

export default Products;
