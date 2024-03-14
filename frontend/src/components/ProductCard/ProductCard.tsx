import { Product } from "../../types/Product";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};
