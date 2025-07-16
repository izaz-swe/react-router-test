import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const UserNavbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', background: '#def7ec' }}>
      <span style={{ marginRight: '1rem' }}>👤 User: {user?.username}</span>
      <Link to="/user/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
      <Link to="/user/profile" style={{ marginRight: '1rem' }}>Profile</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default UserNavbar;
