import ContactLinks from "../ContactLinks/ContactLinks";
import PageName from "../helpers/PageName/PageName";
import ParticlesLayer from "../helpers/Particles/ParticlesLayer";
import Typewriter from "../helpers/Typewriter/Typewriter";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <ParticlesLayer />
      <PageName pageName="Hello, There" />
      <div className={styles.inner_container}>
        <div>
          <h1>Hi, my name is Kirill</h1>
          <Typewriter
            delay={200}
            strings={["JavaScript", "React", "TypeScript", "Redux"]}
            className={styles.typewriter}
          />
        </div>
        <p>
          Frontend developer <span>some text</span>, more text and another text.
          <span>I like u!</span>
        </p>
        <ContactLinks />
      </div>
    </div>
  );
};

export default Home;
