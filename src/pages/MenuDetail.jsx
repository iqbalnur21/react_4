import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      <h1>Menu Detail</h1>
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
