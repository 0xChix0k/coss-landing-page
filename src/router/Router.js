import ErrPage from 'components/common/ErrPage';
import { lazy } from 'react';
import WithLoading from './WithLoading';

const App = WithLoading(lazy(() => import('../App')));
const Home = WithLoading(lazy(() => import('pages/Home')));
const Products = WithLoading(lazy(() => import('pages/Products')));
const News = WithLoading(lazy(() => import('pages/News')));
const About = WithLoading(lazy(() => import('pages/About')));
const Contact = WithLoading(lazy(() => import('pages/Contact')));
const Detail = WithLoading(lazy(() => import('pages/container/news/Detail')));

const Routers = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrPage />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrPage />,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrPage />,
      },
      {
        path: 'news',
        element: <News />,
        errorElement: <ErrPage />,
      },
      {
        path: 'news/:id',
        element: <Detail />,
        errorElement: <ErrPage />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrPage />,
      },
      {
        path: 'contact',
        element: <Contact />,
        errorElement: <ErrPage />,
      },
    ],
  },
];

export default Routers;
