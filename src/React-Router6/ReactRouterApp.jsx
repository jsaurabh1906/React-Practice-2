import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import {
  Home,
  //   About,
  Contact,
  Unsplash,
  OrderSummary,
  AllUsers,
  User,
  Admin,
} from "./pages/pagesindex";
import Products from "./pages/products/Products";
import FeaturedProducts from "./pages/products/FeaturedProducts";
import NewProducts from "./pages/products/NewProducts";
import { unsplashInfoLoader } from "./pages/Unsplash";
import Profile from "./pages/auth/Profile";
import { AuthProvider } from "./pages/auth/auth";
import Login from "./pages/auth/Login";
import RequireAuth from "./pages/auth/RequireAuth";

const LazyAbout = React.lazy(() => import("./pages/About"));

//Info: 1st way of defining router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

//Info: 2nd way of defining router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
      <Route
        path="about"
        element={
          <Suspense
            fallback={<div className="bg-black text-white">Loading..</div>}
          >
            <LazyAbout />
          </Suspense>
        }
      />
      <Route path="contact" element={<Contact />} />
      {/* Dynamic Route */}
      {/* <Route path="user/:userid" element={<User />} /> */}
      <Route
        loader={unsplashInfoLoader}
        path="unsplash"
        element={<Unsplash />}
      />
      <Route path="order-summary" element={<OrderSummary />} />
      {/* Nested Routes */}
      <Route path="products" element={<Products />}>
        <Route path="featured" element={<FeaturedProducts />} />
        <Route path="new" element={<NewProducts />} />
      </Route>
      {/* Nested Dynamic Routes */}
      <Route path="users" element={<AllUsers />}>
        {/* Url params ex: localhost:5173/users/3 */}
        <Route path=":userid" element={<User />} />
        <Route path="admin" element={<Admin />} />
      </Route>
      {/* auth */}
      {/* protected route - profile page */}
      <Route
        path="profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Route>
  )
);

const ReactRouterApp = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
};

export default ReactRouterApp;

//Note: The loader function in React Router is used to fetch data before rendering a route.
//Note: It ensures that the required data is loaded before the component is displayed,
//Note: making the UI more efficient and avoiding unnecessary re-renders.

//searchParams: It is an object that contains the query parameters from the URL.
//ex: localhost:5173/users?filter=active
// ex: localhost:5173/unsplash?search=dog&order=asc&page=2
