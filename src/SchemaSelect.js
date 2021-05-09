import React, { useContext, useState } from "react";
import options from "./options";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RemoveCircleTwoToneIcon from "@material-ui/icons/RemoveCircleTwoTone";
import MyContext from "./Context";
import { SettingsOverscanOutlined } from "@material-ui/icons";

const SchemaSelect = (props) => {
  const [context, setContext] = useContext(MyContext);
  const [sch, setsch] = useState(props.value);
  const [color, setColor] = useState("lightgray");
  const [opts, setOpts] = useState(
    options.filter((i) => {
      let flag = true;
      for (let j in context) {
        if (context[j].value === i.val) {
          flag = false;
          break;
        }
      }
      return flag;
    })
  );
  const removeThis = () => {
    let arr = [...context];
    arr.splice(props.index, 1);
    setContext(arr);
  };

  const setValue = (val) => {
    let arr = [...context];
    arr[props.index]["value"] = val;
    if (val === "account_name") {
      setColor("red");
    } else {
      setColor("green");
    }
    setContext(arr);
  };

  return (
    <>
      <FiberManualRecordIcon className="mt-2" style={{ color: color }} />
      <select
        name=""
        id=""
        value={sch}
        onChange={(e) => {
          setsch(e.target.value);
          setValue(e.target.value);
        }}
        className="form-control"
        required
      >
        <option value="">Add Schema to Segment</option>
        {opts.map((i, index) => (
          <option value={i.val} key={index}>
            {i.name}
          </option>
        ))}
      </select>
      <RemoveCircleTwoToneIcon
        className="mt-2 ml-2"
        style={{ cursor: "pointer" }}
        onClick={removeThis}
      />
    </>
  );
};

export default SchemaSelect;
