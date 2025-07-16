import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) return alert('Username is required');

    login({ username, role });

    // Redirect based on role
    if (role === 'admin') navigate('/admin/dashboard');
    else navigate('/user/dashboard');
  };
  useEffect(()=> {
    if (user) {
      navigate(user.role === 'admin' ? '/admin/dashboard' : '/user/dashboard', { replace: true });
    }
  }, [role])
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br /><br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
