import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function AddProperty() {
  const [data, setData] = useState({
    type: "",
    location: "",
    area: "",
    rooms: "",
    price: "",
    image: "",
    image2: "",
    image3: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    const formdata = new FormData();
    formdata.append("type", data.type);
    formdata.append("location", data.location);
    formdata.append("area", data.area);
    formdata.append("rooms", data.rooms);
    formdata.append("price", data.price);
    formdata.append("image", data.image);
    formdata.append("image2", data.image2);
    formdata.append("image3", data.image3);
    console.log(formdata);
    axios
      .request({
        method: "POST",
        url: "http://localhost:5000/property/create",
        data: formdata,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        navigate("/admin");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Add Property</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputType" className="form-label">
            Type
          </label>
          <input
            type="text"
            className="form-control"
            name="type"
            id="inputType"
            placeholder="Enter Type"
            autoComplete="off"
            onChange={(e) => {
              setData({ ...data, type: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputLocation" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            name="location"
            id="inputLocation"
            placeholder="Enter Location"
            autoComplete="off"
            onChange={(e) => setData({ ...data, location: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputRooms" className="form-label">
            Rooms
          </label>
          <input
            type="text"
            className="form-control"
            name="rooms"
            id="inputRooms"
            placeholder="Enter Rooms"
            onChange={(e) => setData({ ...data, rooms: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            name="price"
            id="inputPrice"
            placeholder="Enter Salary"
            autoComplete="off"
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputArea" className="form-label">
            Area
          </label>
          <input
            type="text"
            className="form-control"
            name="area"
            id="inputArea"
            placeholder="1234 Main St"
            autoComplete="off"
            onChange={(e) => setData({ ...data, area: e.target.value })}
          />
        </div>
        <div className="col-12 mb-3">
          <label className="form-label" htmlFor="inputGroupFile01">
            Select Image
          </label>
          <input
            type="file"
            className="form-control"
            name="image"
            id="inputGroupFile01"
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
          />
        </div>
        <div className="col-12 mb-3">
          <label className="form-label" htmlFor="inputGroupFile02">
            Select Image2
          </label>
          <input
            type="file"
            className="form-control"
            name="image2"
            id="inputGroupFile02"
            onChange={(e) => setData({ ...data, image2: e.target.files[0] })}
          />
        </div>
        <div className="col-12 mb-3">
          <label className="form-label" htmlFor="inputGroupFile03">
            Select Image3
          </label>
          <input
            type="file"
            className="form-control"
            name="image3"
            id="inputGroupFile03"
            onChange={(e) => setData({ ...data, image3: e.target.files[0] })}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProperty;
