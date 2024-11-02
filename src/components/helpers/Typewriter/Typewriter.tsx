import { useEffect, useState } from "react";

const defaults = {
  index: 0,
  length: 0,
  direction: 1,
};

type TTypewriter = {
  strings: string[];
  delay: number;
};

const Typewriter = ({ strings, delay }: TTypewriter) => {
  const [state, setState] = useState({ ...defaults });

  useEffect(() => {
    setState(() => ({ ...defaults }));
  }, [strings]);

  useEffect(() => {
    const timeoutId = setTimeout(setState, delay, ({ ...state }) => {
      state.length += state.direction;
      if (state.length === strings[state.index].length) {
        state.direction = -1;
      } else if (state.length === 0) {
        state.direction = 1;
        state.index = (state.index + 1) % strings.length;
      }
      return state;
    });

    return () => clearTimeout(timeoutId);
  });

  return <div>{strings?.[state?.index]?.slice(0, state?.length)}</div>;
};

export default Typewriter;
