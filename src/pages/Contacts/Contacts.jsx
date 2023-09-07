import css from './Contacts.module.css';
import { FaTelegramPlane, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contacts() {
  return (
    <div className={css.contacts}>
      <h1 className={css.contactsTitle}>My contacts</h1>
      <ul className={css.contactsList}>
        <li className={css.contactsItem}>
          <a
            className={css.contactsLink}
            href="mailto:nmoskalenko911@gmail.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaEnvelope />
            <span>nmoskalenko911@gmail.com</span>
          </a>
        </li>
        <li className={css.contactsItem}>
          <a
            className={css.contactsLink}
            href="https://t.me/tasha8"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaTelegramPlane />
            <span>Telegram</span>
          </a>
        </li>
        <li className={css.contactsItem}>
          <a
            className={css.contactsLink}
            href="https://www.linkedin.com/in/nataly-moskalenko/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
        </li>
        <li className={css.contactsItem}>
          <a
            className={css.contactsLink}
            href="https://github.com/Nataly-Moskalenko"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaGithub />
            <span>Github</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
