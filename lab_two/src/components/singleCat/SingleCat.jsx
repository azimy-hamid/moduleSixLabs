import React from "react";

const SingleCat = ({ cat }) => {
  return (
    <div style={{ width: "300px", margin: "0 auto", height: "400px" }}>
      <img src={cat.image} alt={cat.name} style={{ width: "inherit" }} />
      <h4>{cat.name}</h4>
      <p>{cat.latinName}</p>
    </div>
  );
};

export default SingleCat;
