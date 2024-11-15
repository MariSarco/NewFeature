import ContactLinks from "../ContactLinks/ContactLinks";
import PageName from "../helpers/PageName/PageName";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.container}>
      <PageName pageName="Projects" />
      <div className={styles.inner_container}>
        <div>
          <h1>Projects</h1>
        </div>
        <ContactLinks />
      </div>
    </div>
  );
};

export default Projects;