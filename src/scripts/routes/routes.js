import NowHome from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': NowHome, // default page
  '/nowplaying': NowHome,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
