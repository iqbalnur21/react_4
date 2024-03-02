import { Link, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useState } from "react";
import Layout from "../component/Layout";

const Home = () => {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <Layout>
      {access_token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to={"/login"}>
          <h1>Login</h1>
        </Link>
      )}

      <h1>Ini Home</h1>
    </Layout>
  );
};

export default Home;
