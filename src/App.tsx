import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './components/layout/Layout';

// Lazy load pages for better initial load performance
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Articles = lazy(() => import('./pages/Articles'));
const ArticlePost = lazy(() => import('./pages/ArticlePost'));
const Setups = lazy(() => import('./pages/Setups'));
const Services = lazy(() => import('./pages/Services'));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-bg text-muted">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'setups',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Setups />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: 'artikel',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Articles />
          </Suspense>
        ),
      },
      {
        path: 'artikel/:slug',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ArticlePost />
          </Suspense>
        ),
      },
      {
        path: 'kontakt',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
