import css from './Contacts.module.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

export default function Contacts() {
  return (
    <div className={css.contacts}>
      <h1 className={css.contactsTitle}>My contacts</h1>
      <ul className={css.contactsList}>
        <li className={css.contactsItem}>
          <FaEnvelope />
          <span>nmoskalenko911@gmail.com</span>
        </li>
        <li className={css.contactsItem}>
          <a
            className={css.contactsLink}
            href="https://t.me/tasha8"
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>Github</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
