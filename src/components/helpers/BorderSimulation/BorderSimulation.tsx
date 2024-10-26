import SmoothingCorners from "../SmoothingCorners/SmoothingCorners";
import styles from "./BorderSimulation.module.scss";

type TBorderSimulation = {
  children: JSX.Element;
  figure: string;
};

const BorderSimulation = ({ children, figure }: TBorderSimulation) => {
  return (
    <SmoothingCorners>
      <div className={styles[figure]}>{children}</div>
    </SmoothingCorners>
  );
};

export default BorderSimulation;
