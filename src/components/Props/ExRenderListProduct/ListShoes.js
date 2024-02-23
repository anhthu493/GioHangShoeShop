import React from "react";
import Item from "./item";

const ListProductItem = ({ list, setModal }) => {
  const renderListShoe = () => {
    return list.map((shoe, index) => (
      <div key={index} className="col-4 mt-3">
        <Item data={shoe} setModal={setModal} />
      </div>
    ));
  };

  return <div className="row">{renderListShoe()}</div>;
};

export default ListProductItem;
