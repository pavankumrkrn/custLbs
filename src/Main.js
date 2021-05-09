import React from "react";

const Main = (props) => {
  return (
    <div className="main">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-4 col-md-4">
            <button
              className="btn btn-primary"
              onClick={() => {
                props.setShow();
              }}
            >
              Save Segment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
