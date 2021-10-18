import React, { Dispatch, SetStateAction, useContext } from "react";
import { LoadingContext, VarContext } from "../../myContext";
import "./ButtonShowMore.css";
interface Props {
  //   loading: boolean;
  //   setLoading: Dispatch<SetStateAction<boolean>>;
}

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
      {/* <button onClick={() => setLoading(false)}> TEST </button> */}
    </>
  );
};

export default ButtonShowMore;
