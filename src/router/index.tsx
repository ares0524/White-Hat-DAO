import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { DAO } from '@/pages/dao';
import { Audit } from '@/pages/audit';
import { GiftCards } from '@/pages/gift-cards';
import { BlogPost } from '@/pages/blog';
import { Detail } from '@/pages/blog/Detail';
import { Create } from '@/pages/blog/Create';
import { SafetyRating } from '@/pages/safety-rating';
import { AnnouncementCreate } from '@/pages/Home/AnnouncementCreate';
import { AnnouncementDetail } from '@/pages/Home/AnnouncementDetail';

export default createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/dao',
        element: <DAO />
      },
      {
        path: '/audit',
        element: <Audit />
      },
      {
        path: '/gift-cards',
        element: <GiftCards />
      },
      {
        path: '/blog',
        element: <BlogPost />,
      },
      {
        path: '/blog/detail',
        element: <Detail />
      },
      {
        path: '/blog/create',
        element: <Create />
      },
      {
        path: '/safety-ratings',
        element: <SafetyRating />
      },
      {
        path: '/announcement/create',
        element: <AnnouncementCreate />
      },
      {
        path: '/announcement/detail',
        element: <AnnouncementDetail />
      }
    ]
  }
]);
