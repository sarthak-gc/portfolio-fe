import React, { Suspense } from "react";
import {
  createBrowserRouter,
  isRouteErrorResponse,
  Link,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
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
      errorElement: <ErrorPage />,
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

export function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-9xl font-bold text-gray-300">{error.status}</h1>
          <p className="text-2xl font-semibold text-gray-700 mt-4">
            {error.statusText || "Page Not Found"}
          </p>
          <p className="text-gray-600 mt-4">
            {error.data?.message ||
              "The page you're looking for doesn't exist."}
          </p>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center  text-white justify-center px-6">
      <div className="text-lg text-white text-start md:text-center leading-relaxed">
        <p>
          Oops… something went wrong on the server. I've been notified and is{" "}
          <span className="line-through text-gray-400">
            definitely not panicking
          </span>{" "}
          looking into it.
        </p>

        <p className="mt-8">
          You can{" "}
          <button
            onClick={() => window.location.reload()}
            className="inline-block mx-2 border-b-2 border-gray-600 hover:border-gray-900 transition-colors cursor-pointer"
          >
            reload the page
          </button>{" "}
          or{" "}
          <Link
            to="/"
            className="inline-block mx-2 border-b-2 border-gray-600 hover:border-gray-900 transition-colors"
          >
            go back home
          </Link>
          .
        </p>
        <p className="mt-4 italic text-gray-600">
          (Or kill your time here instead:{" "}
          <a
            href="https://zoomquilt.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-1 border-b-2 border-gray-600 hover:border-gray-900 transition-colors"
          >
            endless zoom quilt
          </a>
          ,{" "}
          <a
            href="https://www.cameronsworld.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-1 border-b-2 border-gray-600 hover:border-gray-900 transition-colors"
          >
            retro 90s click-trip
          </a>
          ,{" "}
          <a
            href="https://www.inbento.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-1 border-b-2 border-gray-600 hover:border-gray-900 transition-colors"
          >
            bento box zen-folding
          </a>
          , or{" "}
          <a
            href="http://www.dontevenreply.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-1 border-b-2 border-gray-600 hover:border-gray-900 transition-colors"
          >
            troll seller emails
          </a>
          . Back in a flash.)
        </p>
      </div>
    </div>
  );
}
