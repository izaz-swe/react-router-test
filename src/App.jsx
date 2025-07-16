// src/App.jsx
import { Routes, Route } from 'react-router-dom';

import PublicLayout from './layout/PublicLayout';
import AdminLayout from './layout/AdminLayout';
import UserLayout from './layout/UserLayout';

import Login from './auth/Login';
import Signup from './auth/Signup';
import About from './pages/About';

import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/UserRoutes';

function App() {
  return (
    <Routes>
      {/* 🌐 Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* 🔐 Admin Protected Routes */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Route>

      {/* 🔐 User Protected Routes */}
      <Route element={<UserLayout />}>
        <Route path="/user/*" element={<UserRoutes />} />
      </Route>
    </Routes>
  );
}

export default App;
