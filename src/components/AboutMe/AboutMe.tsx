import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.photo}>
          <img src="public/image/myPhoto.jpg" />
        </div>
        <div className={styles.text_block}>
          <h1>Me</h1>
          <button className={styles.text_block__button}>More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
