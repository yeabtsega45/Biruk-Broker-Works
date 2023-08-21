import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function AddCar() {
  const [data, setData] = useState({
    name: "",
    model: "",
    transmission: "",
    usage: "",
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
    formdata.append("name", data.name);
    formdata.append("model", data.model);
    formdata.append("transmission", data.transmission);
    formdata.append("usage", data.usage);
    formdata.append("price", data.price);
    formdata.append("image", data.image);
    formdata.append("image2", data.image2);
    formdata.append("image3", data.image3);
    console.log(formdata);
    axios
      .request({
        method: "POST",
        url: "http://localhost:5000/car/create",
        data: formdata,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        navigate("/admin/cars");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Add Car</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="inputName"
            placeholder="Enter Car Name"
            autoComplete="off"
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputModel" className="form-label">
            Model
          </label>
          <input
            type="text"
            className="form-control"
            name="model"
            id="inputModel"
            placeholder="Enter Model"
            autoComplete="off"
            onChange={(e) => setData({ ...data, model: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputUsage" className="form-label">
            Usage
          </label>
          <input
            type="text"
            className="form-control"
            name="usage"
            id="inputUsage"
            placeholder="new/used"
            autoComplete="off"
            onChange={(e) => setData({ ...data, usage: e.target.value })}
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
            placeholder="Enter Price"
            autoComplete="off"
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputTransmission" className="form-label">
            Transmission
          </label>
          <input
            type="text"
            className="form-control"
            name="transmission"
            id="inputTransmission"
            placeholder="auto/manual"
            autoComplete="off"
            onChange={(e) => setData({ ...data, transmission: e.target.value })}
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

export default AddCar;
