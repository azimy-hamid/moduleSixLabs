import React from "react";
import SingleCat from "../singleCat/SingleCat";
import "./BigCats.css";
import { useState } from "react";
import CatForm from "../catForm/index.jsx";

const cats = [
  {
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://snowleopardconservancy.org/wp-content/uploads/2023/02/LEOS_045740_1-sig-1024x683.jpg",
  },

  {
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://images.ctfassets.net/rt5zmd3ipxai/2TtovnO1qnGJyPwtyuVOdU/8ddc745eca71320d2ea1d05679f81cb2/NVA-tiger.jpg?fit=fill&fm=webp&h=578&w=1070&q=72,%20https://images.ctfassets.net/rt5zmd3ipxai/2TtovnO1qnGJyPwtyuVOdU/8ddc745eca71320d2ea1d05679f81cb2/NVA-tiger.jpg?fit=fill&fm=webp&h=1156&w=2140&q=72",
  },

  {
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3JvYl9yYXdwaXhlbF9hX3Bob3RvX29mX2FfY2hlZXRhaF9ydW5uaW5nX2FmdGVyX2FfZ2F6ZWxsZV9zaWRlX183Mjk5Y2E5My01ZWI0LTQ2NDAtOTgzNy00NWVlMDI0ZGU0ZTctNXgtaHEtc2NhbGUtNV8wMHguanBn.jpg",
  },
  {
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://t3.ftcdn.net/jpg/06/51/41/28/360_F_651412849_2sNu3RouSPSywWFMlk70DxJLllCNspFo.jpg",
  },
  {
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSYqR56qs89ObQd5ERgwSSSku9UWHh881aCjexKi8lGkZqttNijibZbZQFNlaYxzTp7Y&usqp=CAU",
  },
  {
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1200px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg",
  },
  {
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeCjcR5xItpoRErPxMVf2IkGKyp1LpbzKVw&s",
  },
];

const BigCats = () => {
  const [catsUnsorted, setCatsUnsorted] = useState(cats);

  const handleSort = () => {
    const sorted = [...catsUnsorted].sort((a, b) => {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    });

    setCatsUnsorted(sorted);
  };

  const handleFilter = () => {
    const filterBy = "Panthera";
    const filtered = [...catsUnsorted].filter((cat) => {
      return cat.latinName.toUpperCase().includes(filterBy.toUpperCase());
    });

    setCatsUnsorted(filtered);
  };

  const handleReset = () => {
    setCatsUnsorted([...cats]);
  };

  const addMoreCat = (cat) => {
    setCatsUnsorted([...cats, cat]);
  };

  const handleDelete = (catToDelete) => {
    const filtered = [...catsUnsorted].filter((cat) => {
      return !cat.latinName
        .toUpperCase()
        .includes(catToDelete.latinName.toUpperCase());
    });

    setCatsUnsorted(filtered);
  };

  const listOfCats =
    catsUnsorted.length === 0 ? (
      <h3>No Cat Available</h3>
    ) : (
      catsUnsorted.map((cat, index) => {
        return (
          <li key={index}>
            Name: {cat.name} | Latin Name: {cat.latinName}
          </li>
        );
      })
    );

  return (
    <div className="">
      <div>
        <h3>Sort or filter the cats list:</h3>
        <div className="sort-filter-btn-container">
          <button className="btn btn-primary mx-2" onClick={handleSort}>
            Sort in Alphabetical Order
          </button>
          <button className="btn btn-success mx-2" onClick={handleFilter}>
            Only show Panthera Family
          </button>
          <button className="btn btn-danger mx-2" onClick={handleReset}>
            Reset
          </button>
        </div>
        <hr />

        <h2>List of Cats in text: </h2>
        {listOfCats}
        <hr />
        <h2>List of cats in cars:</h2>
        <div className="cat-grid">
          {catsUnsorted.map((cat, index) => {
            return (
              <SingleCat key={index} cat={cat} handleDelete={handleDelete} />
            );
          })}
        </div>
      </div>
      <div>
        <hr />
        <h3>Add More Cats</h3>
        <CatForm addCatData={addMoreCat} />
      </div>
    </div>
  );
};

export default BigCats;
