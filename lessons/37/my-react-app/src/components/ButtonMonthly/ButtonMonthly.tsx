import React from "react";

function ButtonMonthly() {
  function handleClick(e: any) {
    e.preventDefault();
    console.log("Monthly Pass");
  }
  return (
    <button className="btn-monthly" onClick={handleClick}>
      Choose
    </button>
  );
}

export default ButtonMonthly;
