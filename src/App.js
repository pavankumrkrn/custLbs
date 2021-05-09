import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import MyContext from "./Context";
import { useState } from "react";

function App() {
  const [context, setContext] = useState([]);
  const [show, setshow] = useState(false);

  const showSidebar = () => {
    setshow(true);
  };

  return (
    <MyContext.Provider value={[context, setContext]}>
      {show ? <Sidebar /> : null}
      <Main setShow={showSidebar} />
    </MyContext.Provider>
  );
}

export default App;
