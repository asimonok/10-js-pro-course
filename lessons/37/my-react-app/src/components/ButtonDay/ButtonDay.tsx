import React from "react";

function ButtonDay() {
  function handleClick(e: any) {
    e.preventDefault();
    console.log("Day Pass");
  }
  return (
    <button className="btn-day" onClick={handleClick}>
      Choose
    </button>
  );
}

export default ButtonDay;
