import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminSettings from '../pages/admin/AdminSettings';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="settings" element={<AdminSettings />} />
    </Routes>
  );
};

export default AdminRoutes;
