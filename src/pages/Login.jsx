import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");

  const navigate = useNavigate();

  const handleOnChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };
  //   const handleOnChange = (event) => {
  //     console.log(event.target.value);
  //   };

  const handleLogin = () => {
    const payload = {
      username: username,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        const token = res.data.data.token;
        if (token) {
          setNotif("Berhasil Login");
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Login Page</h1>
      {!!notif.length && <h1>{notif}</h1>}
      <input
        type="text"
        placeholder="username"
        value={username}
        // onChange={handleOnChangeUsername}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        // onChange={handleOnChangePassword}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
