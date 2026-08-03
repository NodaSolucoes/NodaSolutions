import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Admin from './pages/Admin/index';
import Dashboard from './pages/Dashboard/index';
import AuthGuard from './components/AuthGuard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route 
        path="/admin" 
        element={
          <AuthGuard requiredRole="admin">
            <Admin />
          </AuthGuard>
        } 
      />
      <Route 
        path="/dashboard" 
        element={
          <AuthGuard requiredRole="cliente">
            <Dashboard />
          </AuthGuard>
        } 
      />
    </Routes>
  );
}

export default App;
