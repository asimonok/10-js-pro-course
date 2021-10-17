import React, { Dispatch, SetStateAction, useContext } from "react";
import { LoadingContext, VarContext } from "../../myContext";
import "./ButtonShowMore.css";
interface Props {
  //   loading: boolean;
  //   setLoading: Dispatch<SetStateAction<boolean>>;
}

// this button should add +5 to global variable which changes filtered const in Row container
const ButtonShowMore: React.FC<Props> = (props) => {
  const [value, setValue] = useContext(VarContext);
  const [loading, setLoading] = useContext(LoadingContext);

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
        onClick={() => setValue((prevValue: number) => prevValue + 5)}
      >
        Show More
      </button>
      <button onClick={() => setValue((prevValue: number) => (prevValue = 5))}>
        Reset
      </button>
      <button onClick={() => setLoading(false)}> TEST </button>
    </>
  );
};

export default ButtonShowMore;
