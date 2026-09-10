import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";
import Home from "./features/interview/pages/Home";
import Interview from "./features/interview/pages/Interview";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/app",
        element: <Protected><Home /></Protected>
    },
    {
        path: "/dashboard",
        element: <Protected><Home /></Protected>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/interview/:interviewId",
        element: <Protected><Interview /></Protected>
    }
])