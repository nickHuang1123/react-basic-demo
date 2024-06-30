import Layout from '~/layouts/Default';
import Index from '~/pages/Index';
import PageB from '~/pages/PageB';
import PageC from '~/pages/PageC';
import PageD from '~/pages/PageD';
import NotFoundPage from '~/pages/NotFoundPage';

export default   [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/page-b',
        element: <PageB />,
      },
      {
        path: '/page-c',
        element: <PageC />,
      },
      {
        path: '/page-d',
        element: <PageD />,
      },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]