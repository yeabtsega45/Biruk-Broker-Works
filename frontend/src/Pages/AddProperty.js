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
    const formdata = new FormData();
    formdata.append("type", data.type);
    formdata.append("location", data.location);
    formdata.append("area", data.area);
    formdata.append("rooms", data.rooms);
    formdata.append("price", data.price);
    formdata.append("img", data.image);
    formdata.append("img2", data.image2);
    formdata.append("img3", data.image3);
    axios
      .post("http://localhost:5000/property/create", formdata, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        navigate("/");
        console.log(res.data);
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
            id="inputType"
            placeholder="Enter Type"
            autoComplete="off"
            onChange={(e) => setData({ ...data, type: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputLocation" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
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
            id="inputGroupFile01"
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
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
