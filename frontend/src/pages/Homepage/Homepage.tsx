import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Product } from "../../types/Product";

export const Homepage: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Handmade Crafts</h1>
      <h2>Products</h2>
      {data.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Homepage;
