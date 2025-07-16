import { Outlet } from 'react-router-dom';
import UserNavbar from '../navbar/UserNavbar';
import PrivateRoute from '../utils/PrivateRoute';

const UserLayout = () => {
  return (
    <PrivateRoute role="user">
      <>
        <UserNavbar />
        <main style={{ padding: '1rem' }}>
          <Outlet />
        </main>
      </>
    </PrivateRoute>
  );
};

export default UserLayout;
