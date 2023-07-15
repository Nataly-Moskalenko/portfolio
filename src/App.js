import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { ThemeContext } from './context/ThemeContext';
import css from './App.module.css';

import { lazy, useContext } from 'react';

const About = lazy(() => import('./pages/About/About'));
const Skills = lazy(() => import('./pages/Skills/Skills'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));

export default function App() {
  const { toggle } = useContext(ThemeContext);

  return (
    <div className={toggle ? css.dark : css.light}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}
