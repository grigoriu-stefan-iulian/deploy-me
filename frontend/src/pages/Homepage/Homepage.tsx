import React, { useEffect, useState } from "react";

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
      {data.map((product: { name: string }) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
};

export default Homepage;
