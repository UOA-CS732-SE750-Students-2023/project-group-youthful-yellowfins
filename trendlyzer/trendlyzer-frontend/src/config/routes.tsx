
import { Route, RouteObject, createRoutesFromElements } from 'react-router';
// import Dashboard from '../pages/Dashboard';
// import HomePage from '../pages/HomePage';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../components/Landing/Login-1';
import SignUp from '../components/Landing/Register-1';
// import Layout from '../hoc/Layout/Layout';
// import Sentiment from '../pages/Sentiment/Sentiment';
// import TrendsDetails from '../pages/TrendsDetails/TrendsDetails'; 
import NewLanding from '../components/new-landing/NewLanding';

// const routeDefinition: RouteObject[] = createRoutesFromElements(
//   <Route path='/' element={<Layout />}>
//     <Route path='/' element={<HomePage />} /> 
//     <Route path='/new-landing-page' element ={<NewLanding/>} />
//     <Route path='/dashboard' element={<Dashboard />} />
//     <Route path='/sentiment' element={<Sentiment />} />
//     <Route path='/trendsDetails' element={<TrendsDetails />} />
//   </Route>,
// );  

const routeDefinition1: RouteObject[] = createRoutesFromElements( 
  
  <Route>
    
    <Route path='/' element ={<NewLanding/>} />    
    
    
    
    <Route path= '/login' element={<SignIn/>}/>    


    <Route path= '/register' element={<SignUp/>}/> 

    
    </Route>, 


); 



// const routes = createBrowserRouter(routeDefinition);
const routes1 = createBrowserRouter(routeDefinition1)
export default routes1;
