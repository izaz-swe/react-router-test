import { Route } from 'react-router-dom';
import UserDashboard from '../pages/user/UserDashboard';
import UserProfile from '../pages/user/UserProfile';

const UserRoutes = () => (
  <>
    <Route path="dashboard" element={<UserDashboard />} />
    <Route path="profile" element={<UserProfile />} />
  </>
);

export default UserRoutes;
