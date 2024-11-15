import ContactLinks from "../ContactLinks/ContactLinks";
import PageName from "../helpers/PageName/PageName";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <PageName pageName="Contacts" />
      <div className={styles.inner_container}>
        <div>
          <h1>Contacts</h1>
        </div>
        <ContactLinks />
      </div>
    </div>
  );
};

export default Contacts;
