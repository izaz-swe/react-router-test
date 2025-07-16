import { Outlet } from 'react-router-dom';
import AdminNavbar from '../navbar/AdminNavbar';
import PrivateRoute from '../utils/PrivateRoute';

const AdminLayout = () => {
  return (
    <PrivateRoute role="admin">
      <>
        <AdminNavbar />
        <main style={{ padding: '1rem' }}>
          <Outlet />
        </main>
      </>
    </PrivateRoute>
  );
};

export default AdminLayout;
