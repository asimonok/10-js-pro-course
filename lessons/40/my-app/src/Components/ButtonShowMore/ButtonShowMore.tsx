import React, { useContext } from "react";
import { VarContext } from "../../myContext";
import "./ButtonShowMore.css";
interface Props {}

// this button should add +5 to global variable which changes filtered const in Row container
const ButtonShowMore: React.FC = () => {
  const [value, setValue] = useContext(VarContext);

  //   const showMoreHandler = useCallback(({ value }) => {
  //     const newValue = setValue((value: any) => value + 5);
  //     return setValue((value: any) => value + 5);
  //   }, []);
  //   function showMoreHandler() {
  //     setValue(value + 5);
  //     console.log(value);
  //   }
  return (
    <>
      <button
        className="buttonShowMore"
        onClick={() => setValue((prevValue: any) => prevValue + 5)}
      >
        Show More
      </button>
      <button onClick={() => setValue((prevValue: any) => (prevValue = 5))}>
        Reset
      </button>
    </>
  );
};

export default ButtonShowMore;
