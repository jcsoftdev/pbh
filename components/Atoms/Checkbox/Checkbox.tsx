import React, { useRef, useState } from "react";

const CheckBox = ({ message, setChecked, checked }) => {

  const [isChecked, setIsChecked] = useState(checked)
  const checkboxRef = useRef();

  const handleChecked = (e) => {
    const value = e.target.checked;
    setIsChecked(value);
    setChecked(value)
  };

  return (
    <div className="checkbox">
      <span className="checkbox__text" >{message||`¿Ha donado previamente?`}</span>
      <input
        ref={checkboxRef}
        checked={isChecked}
        onChange={handleChecked}
        className="checkbox__input"
        type="checkbox"
        id="switch"
      />
      <label className="checkbox__label" htmlFor="switch" />
    </div>
  );
};

export default CheckBox;
