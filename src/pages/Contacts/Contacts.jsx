import css from './Contacts.module.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

export default function Contacts() {
  return (
    <div className={css.contacts}>
      <h1 className={css.contactsTitle}>My contacts</h1>
      <div className={css.contactsLink}>
        <FaEnvelope />
        <span>nmoskalenko911@gmail.com</span>
      </div>

      {/* <p>
        <a href="mailto:nmoskalenko911@gmail.com">Email</a>
      </p> */}
      {/* <p>Call me: </p>
      <p>Email: nmoskalenko911@gmail.com</p>
      <p>Location: Sumy, Ukraine</p> */}
      <div>
        <a
          className={css.contactsLink}
          href="https://t.me/tasha8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane />
          <span>Telegram</span>
        </a>
      </div>
      <div>
        <a
          className={css.contactsLink}
          href="https://www.linkedin.com/in/nataly-moskalenko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
          <span>LinkedIn</span>
        </a>
      </div>
      <div>
        <a
          className={css.contactsLink}
          href="https://github.com/Nataly-Moskalenko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>Github</span>
        </a>
      </div>
    </div>
  );
}
