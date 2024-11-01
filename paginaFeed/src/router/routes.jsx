import { createBrowserRouter } from 'react-router-dom';

import Feed from '../components/Feed/Feed';
import BarBot from '../components/SideBar/BarBot/BarBot';
import EditProfile from '../components/SideBar/EditProfile/EditProfile';
import Explore from '../components/SideBar/Explore/Explore';
import Notifications from '../components/SideBar/Notifications/Notifications';

const router = createBrowserRouter([
  { path: '/', element: <Feed /> },
  { path: '/barbot', element: <BarBot /> },
  { path: '/profile', element: <EditProfile /> },
  { path: '/explore', element: <Explore /> },
  { path: '/notifications', element: <Notifications /> },
]);

export default router;
