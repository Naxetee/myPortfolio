import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid #eee' }}>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/experience">Experience</Link>
    <Link to="/contact">Contact</Link>
  </header>
);

export default Header;