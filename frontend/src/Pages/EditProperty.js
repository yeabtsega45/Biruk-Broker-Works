import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function EditProperty() {
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
  const { id } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (id) {
      axios
        .get("http://localhost:5000/property/get/" + id)
        .then((res) => {
          console.log(id);
          setData({
            ...data,
            type: res.data[0].type,
            location: res.data[0].location,
            area: res.data[0].area,
            rooms: res.data[0].rooms,
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
    axios
      .put("http://localhost:5000/property/update/" + id, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Update Property</h2>
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
            value={data.type}
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
            value={data.location}
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
            placeholder="Enter Area"
            autoComplete="off"
            onChange={(e) => setData({ ...data, area: e.target.value })}
            value={data.area}
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
            placeholder="beds:  bath:"
            autoComplete="off"
            onChange={(e) => setData({ ...data, rooms: e.target.value })}
            value={data.rooms}
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

export default EditProperty;
