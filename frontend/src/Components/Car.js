import React, { useEffect, useState } from "react";
import "./Property.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Car() {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  //get all cars
  useEffect(() => {
    axios
      .get("http://localhost:5000/car/getall")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // check if user is logged in, to display edit & delete buttons
  useEffect(() => {
    console.log("Token from localStorage:", localStorage.getItem("token"));
    console.log("Token:", token);
    if (token && token !== "") {
      setIsLoggedIn(true);
    }
    console.log("isLoggedIn:", isLoggedIn);
  }, [token]);

  // delete car
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/car/delete/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {data.map((car, index) => {
        return (
          <div key={index} className="property">
            <Carousel className="carousel">
              <img
                src={`http://localhost:5000/images/` + car.image}
                className="images"
                alt="no_image"
              />
              <img
                src={`http://localhost:5000/images/` + car.image2}
                className="images"
                alt="no_image"
              />
              <img
                src={`http://localhost:5000/images/` + car.image3}
                className="images"
                alt="no_image"
              />
            </Carousel>
            <p className="large">{car.name}</p>
            <p className="small">{car.model}</p>
            <p className="small">{car.transmission}</p>
            <p className="small">{car.usage}</p>
            <p className="large">{car.price}</p>
            {isLoggedIn ? (
              <div>
                <Link
                  to={`/admin/cars/edit/` + car._id}
                  className="btn btn-primary btn-sm me-2"
                >
                  edit
                </Link>
                <button
                  onClick={() => handleDelete(car._id)}
                  className="btn btn-sm btn-danger"
                >
                  delete
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Car;
