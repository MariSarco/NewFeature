import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.scss";
import { INavigationLinks } from "./types";
import { ThemeToggle } from "../helpers/Theme/ThemeToggle";

const navLinks: INavigationLinks[] = [
  { id: '1', link: 'About', path: '/about' },
  { id: '2', link: 'Projects', path: '/projects' },
  { id: '3', link: 'Contacts', path: '/contacts' },
];

const NavMenu = () => {
  return <div className={styles.container}>
    <div className={styles.list__links}>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
          >
            {link.link}
          </NavLink>
        ))}
      </div>
      <ThemeToggle />
  </div>;
};

export default NavMenu;
