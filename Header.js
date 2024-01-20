import Link from 'next/link';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <Link href="/">
          <a style={linkStyle}>
            <img src="/logo.png" alt="Logo" style={logoImgStyle} />
            My Next.js Project
          </a>
        </Link>
      </div>
      <nav style={navStyle}>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>Contact</a>
        </Link>
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
