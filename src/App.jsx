// import { useState } from "react";
// import "./App.css";
// import UseStateApp from "./Hooks/useState/UseStateApp";
// import UseEffectApp from "./Hooks/useEffect/UseEffectApp";
// import UseContextApp from "./Hooks/useContext/UseContextApp";
// import UseReducerApp from "./Hooks/useReducer/UseReducerApp";
// import UseRefApp from "./Hooks/useRef/UseRefApp";
// import UseMemoApp from "./Hooks/useMemo/UseMemoApp";
// import UseCallbackApp from "./Hooks/useCallback/UseCallbackApp";
// import CustomHookApp from "./Hooks/customHooks/CustomHookApp";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       {/* <UseStateApp /> */}
//       {/* <UseEffectApp /> */}
//       {/* <UseContextApp /> */}
//       {/* <UseReducerApp /> */}
//       {/* <UseRefApp /> */}
//       {/* <UseMemoApp /> */}
//       {/* <UseCallbackApp /> */}
//       <CustomHookApp />
//     </>
//   );
// }

// export default App;
////////////////////React -Router////////////////////////
import React, { Children } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Unsplash, { unsplashInfoLoader } from "./pages/Unsplash";

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
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        loader={unsplashInfoLoader}
        path="unsplash"
        element={<Unsplash />}
      />

      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

//Note: The loader function in React Router is used to fetch data before rendering a route.
//Note: It ensures that the required data is loaded before the component is displayed,
//Note: making the UI more efficient and avoiding unnecessary re-renders.
