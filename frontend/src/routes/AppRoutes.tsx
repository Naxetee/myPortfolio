// frontend/src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../components/About/About'
// import Projects from '../components/Projects';
// import Experience from '../components/Experience';
// import Contact from '../components/Contact';

const AppRoutes: React.FC = () => (
<Routes>
    <Route path="/" element={<About />} />
    <Route path="/about" element={<About />} />
    {/* <Route path="/projects" element={<Projects />} /> */}
    {/* <Route path="/experience" element={<Experience />} /> */}
    {/* <Route path="/contact" element={<Contact />} /> */}
    <Route path="/*" element={<div>404 - Página no encontrada</div>} />
</Routes>
);

export default AppRoutes;