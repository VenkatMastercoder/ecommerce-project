/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
// import CardImg from "./assets/img.avif"
import "./style.css";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Help from "./component/Help/Help";
import About from "./component/About/About";
import Error from "./component/Error/Error";
import Body from "./component/Body/Body";
import Counter from "./component/Counter/Counter";

// React Element
// const heading = <h1>hello world</h1>;

// function add() {
//   return 2
// }

// add()

// // Arrow Funtion

// const add = () => {
//   return 2
// }

//npm create vite@latest
const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/counter",
        element:<Counter/>
      }
    ],
    errorElement: <Error />,
  },
]);

// <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
