import styles from "./MyExperience.module.scss";

const MyExperience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.block}>1</div>
        <div className={styles.block}>2</div>
        <div className={styles.block}>3</div>
      </div>
    </div>
  );
};

export default MyExperience;
