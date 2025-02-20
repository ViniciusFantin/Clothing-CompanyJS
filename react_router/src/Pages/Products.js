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
      {loading && <p>Carregando, um momento por favor...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>

          {/* Nested Route */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Products;
