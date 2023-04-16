import React from "react";

const Advertise = () => {
  return (
    <div className="advertise my-4">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.asknestle.in/sites/default/files/styles/original/public/2022-06/Expert-Articles_0_0.jpg?itok=w1ltoSbt"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.asknestle.in/sites/default/files/styles/original/public/2022-06/About-Proteins.jpg?itok=z84JJs9u"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.asknestle.in/sites/default/files/styles/original/public/2022-06/Nutrition-Counselling-Immunity-Destop_1.jpg?itok=SZ5oX4yt"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.asknestle.in/sites/default/files/styles/original/public/2022-06/04-Healthy-Cooking.jpg?itok=_3SmaeRC"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Advertise;
