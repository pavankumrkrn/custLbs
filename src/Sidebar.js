import React, { useContext, useState } from "react";
import "./sidebar.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SchemaSelect from "./SchemaSelect";
import MyContext from "./Context";
const schemaValues = {
  first_name: "First Name",
  last_name: "Last Name",
  gender: "Gender",
  age: "Age",
  account_name: "Account Name",
  city: "City",
  state: "State",
};

const Sidebar = () => {
  const [text, settext] = useState("");
  const [context, setContext] = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      segment_name: text,
      schema: context.map((i) => {
        let sch = {};
        sch["" + i.value] = schemaValues[i.value];
        return sch;
      }),
    };
    console.log(obj);
  };

  const closeModal = () => {};

  const addSchema = () => {
    if (context.length > 7) {
      alert("Maximum of 7 schemas only");
    } else {
      setContext(context.concat([{ value: "" }]));
    }
  };

  return (
    <div className="sidebar">
      <p className="text-left p-3 text-white h5 blue">
        <ArrowBackIosIcon />
        Saving Segment
      </p>
      <div className="body">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="row p-3">
            <div className="col-sm-12">
              <label htmlFor="segment">Enter the Name of the Segment</label>
              <input
                type="text"
                id="segment"
                value={text}
                onChange={(e) => settext(e.target.value)}
                className="form-control"
                placeholder="Name of the segment"
                required
              />

              <p className="mt-3">
                To save your segment, you need to add the schemas to build the
                query
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 text-right">
              <FiberManualRecordIcon className="text-success" />
              <small>User Traits</small>
            </div>
            <div className="col-sm-4 text-left">
              <FiberManualRecordIcon className="text-danger" />
              <small>Group Traits</small>
            </div>
          </div>
          {context.map((i, index) => {
            return (
              <div className="row mt-3" key={index}>
                <div className="col-sm-12 flex">
                  <SchemaSelect value={i.value} index={index} />
                </div>
              </div>
            );
          })}

          <div className="row mt-3">
            <div className="col-sm-12 pl-5">
              <p
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={addSchema}
              >
                + <u>Add new Schema</u>
              </p>
            </div>
          </div>
          <div className="row mt-5 p-3 grey">
            <div className="col-sm-7">
              <button className="btn blue" type="submit">
                <b className="text-white"> Save the Segment </b>
              </button>
            </div>
            <div className="col-sm-4">
              <button
                className="btn btn-light"
                type="reset"
                onClick={closeModal}
              >
                <b className="text-danger">Cancel</b>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
