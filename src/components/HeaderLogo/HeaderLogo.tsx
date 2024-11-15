import { NavLink } from "react-router-dom";
import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/">
        <h1>
          Frontend <span>portfolio</span>
        </h1>
      </NavLink>
    </div>
  );
};

export default HeaderLogo;
