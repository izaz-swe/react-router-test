import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminNavbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', background: '#dbeafe' }}>
      <span style={{ marginRight: '1rem' }}>👑 Admin: {user?.username}</span>
      <Link to="/admin/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
      <Link to="/admin/settings" style={{ marginRight: '1rem' }}>Settings</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default AdminNavbar;
