import React, { useEffect, useState } from "react";
import "./Property.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
// import { Link } from "react-router-dom";

function Property(props) {
  const [data, setData] = useState([]);

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

  //delete property
  // const handleDelete = (id) => {
  //   axios
  //     .delete("http://localhost:8081/delete/" + id)
  //     .then((res) => {
  //       if (res.data.Status === "Success") {
  //         window.location.reload(true);
  //       } else {
  //         alert("Error");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      {data.map((property, index) => {
        return (
          <div key={index} className="property">
            <Carousel className="carousel">
              <img src={property.image} className="images" alt="no_image" />
              <img src={property.image2} className="images" alt="no_image" />
              <img src={property.image3} className="images" alt="no_image" />
            </Carousel>
            <p className="large">{property.type}</p>
            <p className="small">{property.location}</p>
            <p className="small">{property.area}</p>
            <p className="small">{property.rooms}</p>
            <p className="large">{property.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Property;
