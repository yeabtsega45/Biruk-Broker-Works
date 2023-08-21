import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function EditCar() {
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
  const { id } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (id) {
      axios
        .get("http://localhost:5000/car/get/" + id)
        .then((res) => {
          console.log(id);
          setData({
            ...data,
            name: res.data[0].name,
            model: res.data[0].model,
            transmission: res.data[0].transmission,
            usage: res.data[0].usage,
            price: res.data[0].price,
            image: res.data[0].image,
            image2: res.data[0].image2,
            image3: res.data[0].image3,
          });
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Property ID is undefined");
    }
  }, [id]);

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
      .put("http://localhost:5000/car/update/" + id, formdata, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/admin/cars");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Update Car</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Car Name"
            autoComplete="off"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputModel" className="form-label">
            Model
          </label>
          <input
            type="text"
            className="form-control"
            id="inputModel"
            placeholder="Enter Model"
            autoComplete="off"
            onChange={(e) => setData({ ...data, model: e.target.value })}
            value={data.model}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputTransmission" className="form-label">
            Transmission
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTransmission"
            placeholder="auto/manual"
            autoComplete="off"
            onChange={(e) => setData({ ...data, transmission: e.target.value })}
            value={data.transmission}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputUsage" className="form-label">
            Usage
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUsage"
            placeholder="new/used"
            autoComplete="off"
            onChange={(e) => setData({ ...data, usage: e.target.value })}
            value={data.usage}
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
            placeholder="Enter Price"
            autoComplete="off"
            onChange={(e) => setData({ ...data, price: e.target.value })}
            value={data.price}
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
            // value={data.image}
          />
        </div>
        <div className="col-12 mb-3">
          <label className="form-label" htmlFor="inputGroupFile02">
            Select Image2
          </label>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile02"
            onChange={(e) => setData({ ...data, image2: e.target.files[0] })}
            // value={data.image2}
          />
        </div>
        <div className="col-12 mb-3">
          <label className="form-label" htmlFor="inputGroupFile03">
            Select Image3
          </label>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile03"
            onChange={(e) => setData({ ...data, image3: e.target.files[0] })}
            // value={data.image3}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCar;
