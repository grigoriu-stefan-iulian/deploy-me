import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products/`)
      .then((res) => res.json())
      .then((data) => setData(JSON.stringify(data)));
  }, []);

  return (
    <>
      <h1>Handmade Crafts</h1>
      <div className="card">data is: {data}</div>
    </>
  );
}

export default App;
