import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Header Component</h1>
      <p>Reusable within your Next.js Projects</p>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
