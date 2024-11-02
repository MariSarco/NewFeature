import Typewriter from "../helpers/Typewriter/Typewriter";
import ParticlesLayer from "../Particles/ParticlesLayer";
import styles from "./WelcomBlock.module.scss";

const WelcomBlock = () => {
  return (
    <div className={styles.container}>
      <ParticlesLayer />
      <div className={styles.inner_container}>
        <h1>
          Hi, my name is <span>Kirill</span>
        </h1>
        <Typewriter delay={200} strings={['привет', 'пока']}/>
        <p>Frontend developer</p>
        <button
          onClick={() => {
            const element = document.getElementById("MainBlock");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default WelcomBlock;
