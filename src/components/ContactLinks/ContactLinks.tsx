import { Link } from "react-router-dom";
import styles from "./ContactLinks.module.scss";
import { IContactLinks } from "./types";
import TelegramIcon from "../../assets/contactLinks/telegram.svg";
import VkIcon from "../../assets/contactLinks/vk.svg";
import GithubIcon from "../../assets/contactLinks/github.svg";
import WhatsappIcon from "../../assets/contactLinks/whatsapp.svg";

const contactLinks: IContactLinks[] = [
  { id: "1", linkImage: <TelegramIcon />, path: "https://t.me/marisarco" },
  { id: "2", linkImage: <VkIcon />, path: "https://vk.com/marien_thecreator" },
  { id: "3", linkImage: <GithubIcon />, path: "https://github.com/MariSarco" },
  { id: "4", linkImage: <WhatsappIcon />, path: "https://wa.me/79133947462" },
];

const ContactLinks = () => {
  return (
    <div className={styles.container}>
      {contactLinks.map((link) => (
        <Link key={link.id} to={link.path} target="_blank" className={styles.link}>
          {link.linkImage}
        </Link>
      ))}
    </div>
  );
};

export default ContactLinks;
