import React from "react";

const ItemCard = ({ data, setModal }) => {
  const ShowView = () => {
    setModal(data);
  };

  return (
    <div className="card">
      <img className="card-img-top" src={data.image} alt="Title" />
      <div className="card-body">
        <h4 className="card-title">{data.name}</h4>
        <p className="card-text">{data.price}</p>
        <button className="btn btn-danger">Add product</button>
        <button
          className="btn btn-primary"
          style={{ marginLeft: "150px" }}
          onClick={ShowView}
        >
          Show Detail
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
