import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/post",
          element: <Create />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
