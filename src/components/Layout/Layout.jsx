import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { ImSpinner } from 'react-icons/im';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={(navData) => (navData.isActive ? css.active : css.link)} to="/">
          About me
        </NavLink>
        <NavLink className={(navData) => (navData.isActive ? css.active : css.link)} to="/skills">
          Skills
        </NavLink>
        <NavLink className={(navData) => (navData.isActive ? css.active : css.link)} to="/projects">
          Projects
        </NavLink>
        <NavLink className={(navData) => (navData.isActive ? css.active : css.link)} to="/contacts">
          Contact me
        </NavLink>
      </nav>
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