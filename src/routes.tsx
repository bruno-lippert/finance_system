import { createBrowserRouter } from "react-router-dom";
import Login from './components/Login/index';
import Home from "./components/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    }
]);

export default router;