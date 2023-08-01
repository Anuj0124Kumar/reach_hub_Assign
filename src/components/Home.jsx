import React from "react";
import tabacco1 from "./images/tobacco1.webp";
import tabacco2 from "./images/tobacco10.jpeg";
import tabacco3 from "./images/tobacco11.jpeg";
import tabacco4 from "./images/tobacco9.jpeg";
import tabacco5 from "./images/tobacco7.jpeg";
import tabacco6 from "./images/tobacco4.jpeg";
import tabacco7 from "./images/tobacco3.jpeg";
import tabacco8 from "./images/tobacco2.jpeg";
import tabacco10 from "./images/tobacco6.jpeg";
import hd1 from "./images/hd1.webp"
import hd2 from "./images/hd2.webp"

const Home = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide " >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={tabacco1}
            class="d-block w-100"
            style={{ height: "700px", width: "50px" }}
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5
              className="text-black"
              style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}
            >
              Welcome to Amit Engineering Workshop
            </h5>
            <p
              className="text-black"
              style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}
            >
              contact on:-8228048174
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={hd1}
            style={{ height: "700px", width: "50px" }}
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5
              className="text-black"
              style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}
            >
              Welcome to Amit Engineering Workshop
            </h5>
            <p
              className="text-black"
              style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}
            >
              contact on:-8228048174.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={hd2}
            class="d-block w-100"
            style={{ height: "700px", width: "50px" }}
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5
              className="text-black"
              style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}
            >
              Welcome to Amit Engineering Workshop
            </h5>
            <p
              className="text-black"
              style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}
            >
              contact on:-8228048174
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span
          class="visually-block"
          style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}
        >
          Previous
        </span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span
          class="visually-block"
          style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}
        >
          Next
        </span>
      </button>
    </div>
  );
};

export default Home;
