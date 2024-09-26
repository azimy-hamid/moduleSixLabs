import React from "react";

const SingleCat = ({ cat, handleDelete }) => {
  const deleteFunc = () => {};

  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "0 auto", height: "400px" }}
    >
      <img src={cat.image} className="card-img-top" alt={cat.name} />
      <div className="card-body">
        <h4 className="card-title">{cat.name}</h4>
        <p className="card-text">
          <em>{cat.latinName}</em>
        </p>
        <button
          onClick={() => {
            handleDelete(cat);
          }}
          className="btn btn-primary"
        >
          Delete Cat
        </button>
      </div>
    </div>
  );
};

export default SingleCat;
