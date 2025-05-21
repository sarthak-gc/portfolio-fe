import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ascii from "./Pages/Ascii";
const Landing = React.lazy(() => import("./Pages/Landing"));
const Cursor = React.lazy(() => import("./Components/Cursor"));
const About = React.lazy(() => import("./Pages/About"));
const Navbar = React.lazy(() => import("./Components/Landing/Navbar/Navbar"));
const Projects = React.lazy(() => import("./Pages/Projects"));
const ProjectDetail = React.lazy(() => import("./Pages/ProjectDetail"));
const FindMe = React.lazy(() => import("./Pages/FindMe"));
const Contact = React.lazy(() => import("./Pages/Contact"));

const Home = () => (
  <div className="bg-black w-full h-screen">
    <Suspense
      fallback={<div className="bg-black w-screen h-screen"></div>}
    ></Suspense>
    <Landing />
    <Projects />
    <About />
    <FindMe />
    <Contact />
    <Ascii />
  </div>
);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div className="bg-black w-screen h-screen"></div>}>
          <Navbar />
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/project/:projectId",
      element: (
        <Suspense fallback={<div className="bg-black w-screen h-screen"></div>}>
          <Navbar />
          <ProjectDetail />
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      <Suspense fallback={<div className="bg-black w-screen h-screen"></div>}>
        <RouterProvider router={router} />
      </Suspense>
      <Suspense fallback={<div className="bg-black w-screen h-screen"></div>}>
        <Cursor />
      </Suspense>
    </>
  );
};

export default App;
