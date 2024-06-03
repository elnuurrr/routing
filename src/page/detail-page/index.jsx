import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  let params = useParams();
  return (
    <main>
      <div className="Container">
        <h1>DetailPage</h1>
        <button onClick={() => console.log(params)}>Click</button>
      </div>
    </main>
  );
};

export default DetailPage;
