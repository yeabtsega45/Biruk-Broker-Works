import React, { useEffect, useState } from "react";
// import "./Property.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Card.css";
import BeatLoader from "react-spinners/BeatLoader";

function Car() {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  //get all cars
  useEffect(() => {
    setLoading(true);
    axios
      .get("/car/getall")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          setLoading(false);
        } else {
          alert("Error");
          setError("Error while fetching data...server is down.");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Error while fetching data...server is down.");
      });
  }, []);

  // check if user is logged in, to display edit & delete buttons
  useEffect(() => {
    console.log("Token from localStorage:", localStorage.getItem("token"));
    console.log("Token:", token);
    if (token && token !== "") {
      setIsLoggedIn(true);
    }
    // console.log("isLoggedIn:", isLoggedIn);
  }, [token]);

  // delete car
  const handleDelete = (id) => {
    axios
      .delete("/car/delete/" + id, {
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

  if (error) {
    return <h4>{error}</h4>;
  }

  return (
    <div className="properties">
      {loading ? (
        <BeatLoader
          color={"#707070"}
          loading={loading}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : data.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        data.map((car, index) => {
          return (
            <div key={index} className="property">
              <Carousel showThumbs={false} className="carousel">
                <img
                  src={
                    // `http://localhost:5000/images/` +
                    `https://biruk-broker-works-api.onrender.com/images/` +
                    car.image
                  }
                  className="images"
                  alt=""
                />
                <img
                  src={
                    // `http://localhost:5000/images/` +
                    `https://biruk-broker-works-api.onrender.com/images/` +
                    car.image2
                  }
                  className="images"
                  alt=""
                />
                <img
                  src={
                    // `http://localhost:5000/images/` +
                    `https://biruk-broker-works-api.onrender.com/images/` +
                    car.image3
                  }
                  className="images"
                  alt=""
                />
              </Carousel>
              <div className="property-content">
                <p className="large">{car.name}</p>
                {/* <hr /> */}
                <p className="small">{car.model}</p>
                <p className="small">{car.transmission}</p>
                <p className="small">{car.usage}</p>
                {/* <hr /> */}
                <p className="price">{car.price}</p>
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
            </div>
          );
        })
      )}
    </div>
  );
}

export default Car;
