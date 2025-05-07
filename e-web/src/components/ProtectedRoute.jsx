import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Optionally, display a loading indicator
  }

  if (!currentUser) {
    return <Navigate to="/signup" />;
  }

  return children;
};

export default ProtectedRoute;
