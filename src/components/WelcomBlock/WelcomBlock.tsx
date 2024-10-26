import Header from "../Header/Header";
import ParticlesLayer from "../Particles/ParticlesLayer";
import styles from "./WelcomBlock.module.scss";

const WelcomBlock = () => {
  return (
    <div className={styles.container}>
      
      <ParticlesLayer />
      <Header />
      <div className={styles.inner_container}><h1>Welcom</h1></div>
    </div>
  );
};

export default WelcomBlock;
