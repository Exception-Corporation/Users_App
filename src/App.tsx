import Navbar from '@/shared/components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
