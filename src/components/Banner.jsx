import React from "react";
import "./component.css";
const Banner = () => {
  return (
    <div className="banner">
      <img
        className="img-fluid w-100"
        src="https://i1.wp.com/infs.co.in/blog/wp-content/uploads/2020/07/mediterranean-diet-scaled.jpg?fit=2560%2C1297&ssl=1"
        alt="blog_image"
      />
      <div className="head text-center">
        <h1>Health</h1>
        <h6>Lifestylers</h6>
        <p>This blog for people who care about healthy food</p>
        <hr className="w-25 mx-auto" />
      </div>
    </div>
  );
};

export default Banner;
