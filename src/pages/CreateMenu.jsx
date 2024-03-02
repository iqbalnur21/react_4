import { useState } from "react";
import "../register.css";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateMenu = () => {
  const [notif, setNotif] = useState(false);
  const [menu, setMenu] = useState({
    name: "",
    desc: "",
    type: "",
    price: "",
    img: "",
  });
  const handleChange = (event) => {
    setMenu({
      ...menu,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const payload = {
      name: menu.name,
      description: menu.desc,
      type: menu.type,
      price: parseInt(menu.price),
      imageUrl: menu.img,
    };
    axios
      .post("https://api.mudoapi.tech/menu", payload, config)
      .then((res) => {
        setNotif("Data Successfully Added");
      })
      .catch((err) => setNotif(err.response.data.message));
  };
  return (
    <div className="container">
      <h1>Create Menu</h1>
      {!!notif.length && <h2 style={{ color: "green" }}>{notif}</h2>}
      <input
        className="input-field"
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <br />
      <input
        className="desc-field"
        type="text"
        placeholder="Description"
        name="desc"
        onChange={handleChange}
      />
      <br />
      <select className="select-field" name="type" onChange={handleChange}>
        <option name="">Type</option>
        <option value="beverage">Beverage</option>
        <option value="main-dish">Main Dish</option>
      </select>
      <br />
      <input
        className="input-field"
        type="text"
        placeholder="Image URL"
        name="img"
        onChange={handleChange}
      />
      <br />
      <input
        className="input-field"
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleChange}
      />
      <br />
      <div className="button-container">
        <Link to={"/menu"}>
          <button className="back-button">Back</button>
        </Link>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateMenu;
