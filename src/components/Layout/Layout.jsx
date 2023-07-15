import { NavLink, Outlet } from 'react-router-dom';
import { Suspense, useContext } from 'react';
// import { ImSpinner } from 'react-icons/im';
import css from './Layout.module.css';
import { ThemeContext } from '../../context/ThemeContext';

export default function Layout() {
  const { toggle, toggleFunction } = useContext(ThemeContext);
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
        <button className={toggle? css.themeButtonLight : css.themeButtonDark} onClick={toggleFunction}>
          {toggle ? ' To Light Theme' : 'To Dark Theme'}
        </button>
      </div>
      <main>
        <Suspense
          fallback={
            <div className={css.loader}>
              <span className={css.loaderSpan}>Loading...</span>
              {/* <ImSpinner className={css.loaderIcon} /> */}
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
