import React, { Dispatch, SetStateAction, useContext } from "react";
import { LoadedContext, VarContext } from "../../myContext";
import styles from "./ButtonShowMore.module.css";

const ButtonShowMore: React.FC = () => {
  const [value, setValue] = useContext(VarContext);
  const [loaded, setLoaded] = useContext(LoadedContext);
  if (loaded === true) {
    return (
      <>
        <button
          className={styles.buttonShowMore}
          onClick={() => setValue((prevValue: number) => prevValue + 5)}
        >
          Show More
        </button>
        <button
          className={styles.buttonShowMore}
          onClick={() => setValue((prevValue: number) => (prevValue = 5))}
        >
          Reset
        </button>
      </>
    );
  } else {
    return (
      <div className="loading">
        <img
          // src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif"
          src="https://i.gifer.com/yy3.gif"
          // src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif"
          alt="loading..."
        />
      </div>
    );
  }
};

export default ButtonShowMore;
