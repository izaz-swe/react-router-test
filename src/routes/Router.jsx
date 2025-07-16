import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AppLayout from '../layout/AdminLayout';
import PublicLayout from '../layout/PublicLayout';
import ProtectedRoute from './ProtectedRoute'; 

const Login = lazy(() => import('../pages/public/Login'));
const Signup = lazy(() => import('../pages/public/Signup'));
const AboutUs = lazy(() => import('../pages/public/AboutUs'));

const AdminDashboard = lazy(() => import('../pages/admin/Dashboard'));
const UserList = lazy(() => import('../pages/admin/UserList'));

const Profile = lazy(() => import('../pages/user/Profile'));
const Settings = lazy(() => import('../pages/user/Settings'));

const Notifications = lazy(() => import('../pages/shared/Notifications'));
const Help = lazy(() => import('../pages/shared/Help'));
const NotAuthorized = lazy(() => import('../pages/shared/NotAuthorized'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes = [
  // Public routes
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: '', element: <Navigate to="/login" /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: '*', element: <NotFound /> },
    ],
  },

  // Authenticated + role-protected routes under AppLayout
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // 🔐 Admin-only routes
      {
        path: 'admin/dashboard',
        element: (
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin/users',
        element: (
          <ProtectedRoute role="admin">
            <UserList />
          </ProtectedRoute>
        ),
      },
      

      // 👤 User-only routes
      {
        path: 'profile',
        element: (
          <ProtectedRoute role="user">
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute role="user">
            <Settings />
          </ProtectedRoute>
        ),
      },

      // 👥 Shared authenticated routes (admin or user)
      {
        path: 'notifications',
        element: (
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        ),
      },
      {
        path: 'help',
        element: (
          <ProtectedRoute>
            <Help />
          </ProtectedRoute>
        ),
      },
      {
        path: 'not-authorized',
        element: (
          <ProtectedRoute>
            <NotAuthorized />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: (
          <ProtectedRoute>
            <NotFound />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

export default routes;
