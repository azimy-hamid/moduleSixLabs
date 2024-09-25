import React from "react";
import SingleCat from "../singleCat/SingleCat";
import "./BigCats.css";
const cats = [
  {
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3JvYl9yYXdwaXhlbF9hX3Bob3RvX29mX2FfY2hlZXRhaF9ydW5uaW5nX2FmdGVyX2FfZ2F6ZWxsZV9zaWRlX183Mjk5Y2E5My01ZWI0LTQ2NDAtOTgzNy00NWVlMDI0ZGU0ZTctNXgtaHEtc2NhbGUtNV8wMHguanBn.jpg",
  },
  {
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeCjcR5xItpoRErPxMVf2IkGKyp1LpbzKVw&s",
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
];

const listOfCats =
  cats.length === 0 ? (
    <h3>No Cat Available</h3>
  ) : (
    cats.map((cat, index) => {
      return (
        <li key={index}>
          Name: {cat.name} | Latin Name: {cat.latinName}
        </li>
      );
    })
  );

const BigCats = () => {
  return (
    <div>
      <h2>Answer to step 1 & step 2</h2>
      {listOfCats}
      <hr />
      <h2>Answer to step 3</h2>
      <div className="cat-grid">
        {cats.map((cat, index) => {
          return <SingleCat key={index} cat={cat} />;
        })}
      </div>
    </div>
  );
};

export default BigCats;
