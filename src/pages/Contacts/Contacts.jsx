import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={css.contacts}>
      <h1 className={css.contactsTitle}>My contacts:</h1>
      {/* <p>
        <a href="mailto:nmoskalenko911@gmail.com">Email</a>
      </p> */}
      {/* <p>Call me: </p>
      <p>Email: nmoskalenko911@gmail.com</p>
      <p>Location: Sumy, Ukraine</p> */}
      <p>
        <a
          className={css.contactsLink}
          href="https://t.me/tasha8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </p>
      <p>
        <a
          className={css.contactsLink}
          href="https://www.linkedin.com/in/nataly-moskalenko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a
          className={css.contactsLink}
          href="https://github.com/Nataly-Moskalenko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  );
}
