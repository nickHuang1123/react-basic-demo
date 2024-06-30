/**
 * React router 純 config 路由配置
 */
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const Router = createBrowserRouter(
  routes,
);

export default Router;