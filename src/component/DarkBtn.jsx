import { useContext, useState } from "react";
import { GlobalContext } from "../ContextApi/Context";

const DarkBtn = () => {
  const [checked, setChecked] = useState(false);
  const {theme , setTheme} = useContext(GlobalContext)

  return (
    <div className="toggleWrapper hidden md:flex ">
      <input
        type="checkbox"
        id="dn"
        checked={theme}
        onChange={() => setTheme(!theme)}
        className="input"
      />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
};

export default DarkBtn;
