import { Link } from 'react-router-dom';

const PublicNavbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
      <Link to="/signup" style={{ marginRight: '1rem' }}>Signup</Link>
      <Link to="/about">About Us</Link>
    </nav>
  );
};

export default PublicNavbar;
