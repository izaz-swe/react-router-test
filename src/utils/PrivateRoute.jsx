import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingScreen from '../components/LoadingScreen';

const PrivateRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  if (loading) return <LoadingScreen />; // Or a loading spinner

  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== role) return <Navigate to="/not-authorized" replace />;

  return children;
};

export default PrivateRoute;
