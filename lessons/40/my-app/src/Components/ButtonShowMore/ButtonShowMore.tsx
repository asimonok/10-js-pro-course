import React, { Dispatch, SetStateAction, useContext } from "react";
import { VarContext } from "../../myContext";
import "./ButtonShowMore.css";
interface Props {}

const ButtonShowMore: React.FC<Props> = (props) => {
  const [value, setValue] = useContext(VarContext);
  // const [loading, setLoading] = useContext(LoadingContext);

  return (
    <>
      <button
        className="buttonShowMore"
        onClick={() => setValue((prevValue: number) => prevValue + 5)}
      >
        Show More
      </button>
      <button
        className="buttonShowMore"
        onClick={() => setValue((prevValue: number) => (prevValue = 5))}
      >
        Reset
      </button>
    </>
  );
};

export default ButtonShowMore;
