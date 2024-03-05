import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './footer/Footer';
import NavBar from './nav/NavBar';
import Tickets from './tickets/Tickets';
import HomePage from './home/HomePage';
import Lineup from './lineup/Lineup';
import Faq from './faq/Faq';
import Contact from './contact/Contact';
import Loader from './ui/Spinner';
import Cart from './cart/Cart';
import AppLayout from './ui/AppLayout';
// import { Loader } from '@react-three/drei';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/lineup',
        element: <Lineup />,
      },
      {
        path: '/tickets',
        element: <Tickets />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
