import { Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { useAuth } from './store/authStore';

function App() {
  const { username } = useAuth();

  if (username) {
    return <Layout />;
  } else {
    return <Navigate to={'/login'} replace />;
  }
}

export default App;
