import { Outlet } from 'react-router-dom';
import PublicNavbar from '../navbar/PublicNavbar';

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
