import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

function Menu() {
  const [menus, setMenus] = useState([]);

  const getMenu = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => setMenus(res.data.data.Data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenu();
  }, []);

  console.log("data", menus);

  return (
    <div>
      <Navbar />
      {menus.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <img
            src={item.imageUrl}
            style={{ width: "200px", height: "100%" }}
            alt=""
          />
          <Link to={`/menu/${item.id}`}>
            <button>detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;
