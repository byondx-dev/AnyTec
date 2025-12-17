import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Setups from './pages/Setups';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'setups',
        element: <Setups />,
      },
      {
        path: 'artikel',
        element: <Articles />,
      },
      {
        path: 'kontakt',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
