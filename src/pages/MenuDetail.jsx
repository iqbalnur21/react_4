import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const MenuDetail = () => {
  const [menu, setMenu] = useState([]);
  const { id } = useParams();

  const getMenuDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${id}`)
      .then((res) => setMenu(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenuDetail();
  }, []);

  const handleDelete = () => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`https://api.mudoapi.tech/menu/${id}`, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Menu Detail</h1>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={handleDelete}
      >
        Delete
      </button>
      <h1>{menu.name}</h1>
      <p>{menu.description}</p>
      <img
        src={menu.imageUrl}
        style={{ width: "200px", height: "100%" }}
        alt=""
      />
    </div>
  );
};

export default MenuDetail;
