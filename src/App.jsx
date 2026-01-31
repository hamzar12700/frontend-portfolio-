import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalContext } from "./ContextApi/Context";
import Login from "./pages/Login";
import UiRendering from "./pages/UiRendering";

const App = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <>

    <div className={`  min-h-screen ${theme ? 'bg-black text-white' : "bg-white text-black"}`}>

    {/* <div className={`${theme ? "black " : "white "} h-full `}> */}
      <Routes>
        <Route path="/" element={<UiRendering />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    {/* </div> */}
    </div>
    </>
  );
};

export default App;
