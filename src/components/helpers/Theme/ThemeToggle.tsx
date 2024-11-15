import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";
import { useTheme } from "./ThemeProvider";
import styles from "./ThemeToggle.module.scss";


export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      name="toggle mode"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={styles.container}
    >
      {theme === "light" ? (
        <SunIcon className={styles.icon} />
      ) : (
        <MoonIcon className={styles.icon} />
      )}
    </button>
  );
}
