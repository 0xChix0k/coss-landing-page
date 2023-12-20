import About from 'pages/About';
import Contact from 'pages/Contact';
import Detail from 'pages/container/news/Detail';
import Home from 'pages/Home';
import News from 'pages/News';
import Products from 'pages/Products';
import App from '../App';

// const App = lazy(() => import('../App'));
// const Home = lazy(() => import('pages/Home'));
// const Products = lazy(() => import('pages/Products'));
// const News = lazy(() => import('pages/News'));
// const About = lazy(() => import('pages/About'));
// const Contact = lazy(() => import('pages/Contact'));

const Routers = [
  {
    path: '/',
    element: (
      // <Suspense fallback={<Loading />}>
      <App />
      // </Suspense>
    ),
    errorElement: <div>Error</div>,
    children: [
      {
        path: '',
        element: (
          // <Suspense fallback={<Loading />}>
          <Home />
          // </Suspense>
        ),
      },
      {
        path: 'products',
        element: (
          // <Suspense fallback={<Loading />}>
          <Products />
          // </Suspense>
        ),
      },
      {
        path: 'news',
        element: (
          // <Suspense>
          <News />
          // </Suspense>
        ),
      },
      {
        path: 'news/:id',
        element: <Detail />,
      },
      {
        path: 'about',
        element: (
          // <Suspense>
          <About />
          // </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          // <Suspense>
          <Contact />
          // </Suspense>
        ),
      },
    ],
  },
];

export default Routers;
