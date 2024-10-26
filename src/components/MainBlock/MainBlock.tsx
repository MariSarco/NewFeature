import DesignBlock from "../DesignBlock/DesignBlock";
import styles from "./MainBlock.module.scss";

const MainBlock = () => {
  return (
    <div className={styles.container}>
      <DesignBlock />
    </div>
  );
};

export default MainBlock;
