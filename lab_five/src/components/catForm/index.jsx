import React, { useState } from "react";

const CatForm = ({ addCatData }) => {
  const [formData, setFormData] = useState({
    name: "",
    latinName: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCatData(formData);
    console.log(formData);
    setFormData({
      name: "",
      latinName: "",
      image: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="catName">Cat Name:</label>
        <input
          type="text"
          className="form-control"
          id="catName"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter cat name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="catLatinName">Cat Latin Name:</label>
        <input
          type="text"
          className="form-control"
          id="catLatinName"
          name="latinName"
          value={formData.latinName}
          onChange={handleChange}
          placeholder="Enter cat Latin name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="catImage">Image URL:</label>
        <input
          type="text"
          className="form-control"
          id="catImage"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter the exact image URL"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Add Cat
      </button>
    </form>
  );
};

export default CatForm;
