import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Sales } from './pages/Sales';
import { Store } from './pages/Store';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Store />,
      },
      {
        path: 'sales',
        element: <Sales />,
      },
    ],
  },
]);

export default router;
