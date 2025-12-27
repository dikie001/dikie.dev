import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { AdminLayout } from './components/admin';
import {
  Dashboard,
  Visitors,
  Messages,
  Analytics,
  Settings,
  Login
} from './pages/admin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="visitors" element={<Visitors />} />
          <Route path="messages" element={<Messages />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;