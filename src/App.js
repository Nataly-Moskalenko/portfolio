import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Skills = lazy(() => import('./pages/Skills/Skills'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}
