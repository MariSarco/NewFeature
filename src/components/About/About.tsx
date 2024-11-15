import ContactLinks from "../ContactLinks/ContactLinks";
import PageName from "../helpers/PageName/PageName";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <PageName pageName="About" />
      <div className={styles.inner_container}>
        <div>
          <h1>About me</h1>
        </div>
        <ContactLinks />
      </div>
    </div>
  );
};

export default About;
