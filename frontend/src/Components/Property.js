import React, { useEffect, useState } from "react";
import "./Property.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Property(props) {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //get all properties
  useEffect(() => {
    axios
      .get("http://localhost:5000/property/getall")
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
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // delete property
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/property/delete/" + id)
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
      {data.map((property, index) => {
        return (
          <div key={index} className="property">
            <Carousel className="carousel">
              <img
                src={`http://localhost:5000/images/` + property.image}
                className="images"
                alt="no_image"
              />
              <img
                src={`http://localhost:5000/images/` + property.image2}
                className="images"
                alt="no_image"
              />
              <img
                src={`http://localhost:5000/images/` + property.image3}
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
                  to={`/edit/` + property.id}
                  className="btn btn-primary btn-sm me-2"
                >
                  edit
                </Link>
                <button
                  onClick={() => handleDelete(property.id)}
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
