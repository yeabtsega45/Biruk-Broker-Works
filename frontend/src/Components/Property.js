import React, { useEffect, useState } from "react";
// import "./Property.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Card.css";
import BeatLoader from "react-spinners/BeatLoader";

function Property() {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  //get all properties
  useEffect(() => {
    setLoading(true);
    axios
      .get("/property/getall")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          console.log(res.data);
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

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="properties">
      {loading ? (
        <div className="loading">
          <BeatLoader
            color={"#707070"}
            loading={loading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : data.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        data.map((property, index) => {
          return (
            <div key={index} className="property">
              <Carousel showThumbs={false} className="carousel">
                <img
                  src={
                    // `http://localhost:5000/images/` +
                    `https://biruk-broker-works-api.onrender.com/images/` +
                    property.image
                  }
                  className="images"
                  alt=""
                />
                <img
                  src={
                    // `http://localhost:5000/images/` +
                    `https://biruk-broker-works-api.onrender.com/images/` +
                    property.image2
                  }
                  className="images"
                  alt=""
                />
                <img
                  src={
                    // `http://localhost:5000/images/` +
                    `https://biruk-broker-works-api.onrender.com/images/` +
                    property.image3
                  }
                  className="images"
                  alt=""
                />
              </Carousel>
              <div className="property-content">
                <p className="large">{property.type}</p>
                <p className="small">{property.location}</p>
                <p className="small">{property.area}</p>
                <p className="small">{property.rooms}</p>
                <p className="price">{property.price}</p>
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
            </div>
          );
        })
      )}
    </div>
  );
}

export default Property;
