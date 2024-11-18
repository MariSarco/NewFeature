import ContactLinks from "../ContactLinks/ContactLinks";
import PageName from "../helpers/PageName/PageName";
import styles from "./About.module.scss";
import { IInfo } from "./types";

const info: IInfo[] = [
  { id: "1", title: "Title", text: "Some text" },
  { id: "2", title: "Title", text: "More text" },
  { id: "3", title: "Title", text: "Another text" },
];

const About = () => {
  return (
    <div className={styles.container}>
      <PageName pageName="About" />
      <div className={styles.inner_container}>
        <h1>About me</h1>
        <ul className={styles.list_of_info}>
          {info.map((info) => (
            <li key={info.id}>
              <h2>{info.title}</h2>
              <p>{info.text}</p>
            </li>
          ))}
        </ul>
        <ContactLinks />
      </div>
    </div>
  );
};

export default About;
