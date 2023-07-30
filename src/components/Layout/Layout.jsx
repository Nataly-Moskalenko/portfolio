import { NavLink, Outlet } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import css from './Layout.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Layout() {
  const { theme, checkTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className={css.header}>
        <nav className={css.nav}>
          <NavLink className={(navData) => (navData.isActive ? css.active : css.link)} to="/">
            About me
          </NavLink>
          <NavLink className={(navData) => (navData.isActive ? css.active : css.link)} to="/skills">
            Skills
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? css.active : css.link)}
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? css.active : css.link)}
            to="/contacts"
          >
            Contact me
          </NavLink>
        </nav>
        <button
          type="button"
          className={theme === 'light' ? css.themeButtonLight : css.themeButtonDark}
          onClick={checkTheme}
        >
          {theme === 'light' ? (
            <FaSun className={css.themeIcon} title="Light Theme" />
          ) : (
            <FaMoon className={css.themeIcon} title="Dark Theme" />
          )}
        </button>
      </div>
      <main>
        <Suspense
          fallback={
            <div className={css.loader}>
              <span className={css.loaderSpan}>Loading...</span>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
