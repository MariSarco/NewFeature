import { useEffect, useState } from "react";
import styles from "./Typewriter.module.scss";

const defaults = {
  index: 0,
  length: 0,
  direction: 1,
};

type TTypewriter = {
  strings: string[];
  delay: number;
  className: string;
};

const Typewriter = ({ strings, delay, className }: TTypewriter) => {
  const [state, setState] = useState({ ...defaults });

  useEffect(() => {
    setState(() => ({ ...defaults }));
  }, [strings]);

  useEffect(() => {
    const timeoutId = setTimeout(setState, delay, ({ ...state }) => {
      state.length += state.direction;
      if (state.length === strings[state.index].length) {
        setTimeout(setState, 1000, () => {
          state.direction = -1;
          return state;
        });
      } else if (state.length === 0) {
        state.direction = 1;
        state.index = (state.index + 1) % strings.length;
      }
      return state;
    });

    return () => clearTimeout(timeoutId);
  });

  return (
    <div className={styles.container}>
      <div className={`${styles.main} ${className}`}>
        {strings?.[state?.index]?.slice(0, state?.length)}
      </div>
    </div>
  );
};

export default Typewriter;
