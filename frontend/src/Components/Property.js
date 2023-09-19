import React, { useEffect, useState } from "react";
import "./Property.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Property() {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  //get all properties
  useEffect(() => {
    axios
      .get("/property/getall")
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
    // console.log("isLoggedIn:", isLoggedIn);
  }, [token]);

  // delete property
  const handleDelete = (id) => {
    axios
      .delete("/property/delete/" + id, {
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
    <div className="properties">
      {data.map((property, index) => {
        return (
          <div key={index} className="property">
            <Carousel className="carousel">
              <img
                src={
                  `https://biruk-broker-works-api.onrender.com/images/` +
                  property.image
                }
                className="images"
                alt="no_image"
              />
              <img
                src={
                  `https://biruk-broker-works-api.onrender.com/images/` +
                  property.image2
                }
                className="images"
                alt="no_image"
              />
              <img
                src={
                  `https://biruk-broker-works-api.onrender.com/images/` +
                  property.image3
                }
                className="images"
                alt="no_image"
              />
            </Carousel>
            <p className="large">{property.type}</p>
            <p className="small">{property.location}</p>
            <p className="small">{property.area}</p>
            <p className="small">{property.rooms}</p>
            <p className="large">{property.price}</p>
            {isLoggedIn ? (
              <div>
                <Link
                  to={`/admin/edit/` + property._id}
                  className="btn btn-primary btn-sm me-2"
                >
                  edit
                </Link>
                <button
                  onClick={() => handleDelete(property._id)}
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

export default Property;
