import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './pages/Account';
import Login from './pages/Login';
import RideHistory from './pages/RideHistory';
import Preferences from './pages/Preferences';
import Logout from './pages/Logout';
import UpiPaymentPage from './UpiPaymentPage';

function Update() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UpiPaymentPage" element={<UpiPaymentPage />} />
        <Route path="/ride-history" element={<RideHistory />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}
export default Update;
