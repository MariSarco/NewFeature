import HeaderLogo from "../HeaderLogo/HeaderLogo";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <HeaderLogo />
      <NavMenu />
    </div>
  );
};

export default Header;
