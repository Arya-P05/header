// components/Header.js

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <a href="/">
          <img src="/logo.png" alt="Logo" style={logoImgStyle} />
          My Next.js Project
        </a>
      </div>
      <nav style={navStyle}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

// Inline styles
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#333',
  color: '#fff',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoImgStyle = {
  width: '30px',
  marginRight: '0.5rem',
};

const navStyle = {
  display: 'flex',
};

const linkStyle = {
  margin: '0 1rem',
  textDecoration: 'none',
  color: '#fff',
};

export default Header;
