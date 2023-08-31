import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import css from './Modal.module.css';
import { ThemeContext } from '../../context/ThemeContext';

export default function Modal({ onClick }) {
  const { theme } = useContext(ThemeContext);

  return ReactDOM.createPortal(
    <div className={theme === 'light' ? css.overlay : css.overlayDark}>
      <div className={theme === 'light' ? css.modal : css.darkModal}>
        <button onClick={onClick} type="button" className={css.modalButton}>
          Close
        </button>
        <nav className={css.nav}>
          <NavLink
            className={(navData) => (navData.isActive ? css.active : css.link)}
            to="/"
            onClick={onClick}
          >
            About me
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? css.active : css.link)}
            to="/skills"
            onClick={onClick}
          >
            Skills
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? css.active : css.link)}
            to="/projects"
            onClick={onClick}
          >
            Projects
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? css.active : css.link)}
            to="/contacts"
            onClick={onClick}
          >
            Contact me
          </NavLink>
        </nav>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
