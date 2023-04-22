import { Route, RouteObject, createRoutesFromElements } from 'react-router';
import Dashboard from '../pages/Dashboard';
import HomePage from '../pages/HomePage';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
// import Sentiment from '../pages/Sentiment/Sentiment';
import TrendsDetails from '../pages/TrendsDetails/TrendsDetails';
import Login from '../pages/Authentication/Login';
import InterestByRegionComponent from '../pages/InterestByRegion copy/InterestByRegionComponent';

const routeDefinition: RouteObject[] = createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='/' element={<HomePage />} />
    <Route path='/dashboard' element={<Dashboard />} />
    {/* <Route path='/sentiment' element={<Sentiment />} /> */}
    <Route path='/trendsDetails/:id' element={<TrendsDetails />} />
    <Route path='/login' element={<Login />} />
    <Route path='/exploreTrends' element={<InterestByRegionComponent />} />
  </Route>,
);

const routes = createBrowserRouter(routeDefinition);

export default routes;
