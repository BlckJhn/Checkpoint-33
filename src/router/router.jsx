import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import ErrorBoundary from "../components/ErrorBoundary";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/DbMain";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />, // Error boundary for the root element
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/books/:id",
        element: <SingleBook />,
        errorElement: <ErrorBoundary />, // Error boundary for SingleBook route
        loader: async ({ params }) => {
          try {
            const response = await fetch(`http://localhost:3000/books/${params.id}`);
            if (!response.ok) {
              throw new Error('Failed to load book'); // Throw an error if the response is not okay
            }
            return response.json(); // Parse and return the JSON response
          } catch (error) {
            console.error('Loader Error:', error);
            throw new Response('Failed to load book', { status: 500 }); // Throw a response error if fetch fails
          }
        },
      }
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBook />
      },
      {
        path: "/admin/dashboard/edit-books/:_id",
        element: <EditBook />,
        loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`),
      },
    ]
  }
]);

export default router;
