import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const hideFooterRoutes = ["/login", "/sign-up", "/home"];

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">

        <Outlet />

        {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      </div>

    </div >
  );
}

export default App;
