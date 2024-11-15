import DesignBlock from "../DesignBlock/DesignBlock";
import BorderSimulation from "../helpers/BorderSimulation/BorderSimulation";
import styles from "./MainBlock.module.scss";

const MainBlock = () => {
  return (
    <div id='MainBlock' className={styles.container}>
      
      <div className={styles.section}>
        <DesignBlock />
        <BorderSimulation figure="circle">
          <div className={styles.section_icon}>IMG</div>
        </BorderSimulation>
        <div className={styles.section_text}>
          <h1>Heading</h1>
          <p>text</p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.section_text}>
          <h1>Heading</h1>
          <p>text</p>
        </div>
        <BorderSimulation figure="circle">
          <div className={styles.section_icon}>IMG</div>
        </BorderSimulation>

        <DesignBlock />
      </div>
    </div>
  );
};

export default MainBlock;
