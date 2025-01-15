import App from './App';
import ErrorPage from './pages/errorPage';
import Register from './pages/register';
import Login from './pages/login';

const routes = [
    {
      path: "/",
      element: <App />,
      index:true,
      errorElement: <ErrorPage />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
      },
  ];
  
  export default routes;