import { useTransition, animated } from "@react-spring/web";
import { useLocation } from "react-router-dom";

type TAnimatedPageChange = {
  children: JSX.Element;
};

const AnimatedPageChange = ({ children }: TAnimatedPageChange) => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      transform: "translate3d(100%,0,0)",
      config: { duration: 400 },
    },
    enter: {
      transform: "translate3d(0%,0,0)",
      config: { duration: 400 },
    },
    leave: {
      transform: "translate3d(-100%,0,0)",
      config: { duration: 400 },
    },
  });
  return (
    <div>
      {transitions((styles) => (
        <animated.div style={styles}>{children}</animated.div>
      ))}
    </div>
  );
};

export default AnimatedPageChange;
