import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import AuthGuard from './components/AuthGuard';

const Login = lazy(() => import('./pages/Login/index'));
const Admin = lazy(() => import('./pages/Admin/index'));
const Dashboard = lazy(() => import('./pages/Dashboard/index'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails/index'));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-noda-base flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-noda-primary border-t-transparent animate-spin"></div></div>}>
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
          path="/admin/projeto/:id" 
          element={
            <AuthGuard requiredRole="admin">
              <ProjectDetails />
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
    </Suspense>
  );
}

export default App;
