import React from "react";
import { useLocation } from "react-router-dom";
import "./pages.css";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Advertise from "../components/Advertise";
import Blogs from "../components/Blogs";
const Dashboard = () => {
  const { pathname } = useLocation();
  return (
    <div className="dashboard">
      {pathname === "/" && <Banner />}
      <Header />
      <Featured />
      <Advertise />
      <Blogs />
    </div>
  );
};

export default Dashboard;
