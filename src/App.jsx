import { Routes, Route } from 'react-router-dom';

import PublicLayout from './layout/PublicLayout';
import AdminLayout from './layout/AdminLayout';
import UserLayout from './layout/UserLayout';

import Login from './auth/Login';
import Signup from './auth/Signup';
import About from './pages/About';
import NotFound from './pages/NotFound';

import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/UserRoutes';

function App() {
  return (
    <Routes>
      {/* 🌐 Public */}
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="not-authorized" element={<NotFound />} />
      </Route>

      {/* 🔐 Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        {AdminRoutes()}
      </Route>

      {/* 🔐 User */}
      <Route path="/user" element={<UserLayout />}>
        {UserRoutes()}
      </Route>
    </Routes>
  );
}

export default App;
