import { Routes, Route } from 'react-router-dom';
import UserDashboard from '../pages/user/UserDashboard';
import UserProfile from '../pages/user/UserProfile';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<UserDashboard />} />
      <Route path="profile" element={<UserProfile />} />
    </Routes>
  );
};

export default UserRoutes;
