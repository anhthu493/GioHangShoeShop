import React from "react";

const CustomModal = ({ content, closeModal }) => {
  return (
    <div className="modal" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{content.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <p>Name : {content.name}</p>
            <p>Price: ${content.price}</p>
            <p>Description: {content.description}</p>
            <p>Quantity : {content.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
