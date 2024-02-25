import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        const token = res.data.data.token;
        localStorage.setItem("access_token", token);
        if (token) {
          setLoading(false);
          setNotif("Berhasil Login");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        setLoading(false);
        const msg = err.response.data.message;
        if (msg == "Username not found") {
          setNotif("Username Tidak Ditemukan, Masukkan Username Yang Benar");
        } else if (msg == "Incorrect Password") {
          setNotif("Password Salah, Silahkan Masukkan Password Yang Benar");
        } else {
          setNotif(err.response.data.message);
        }
        console.log(err.response.data.message);
      });
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
      <button disabled={loading} onClick={handleLogin}>
        {loading ? "Loading..." : "Login"}
      </button>
    </div>
  );
};

export default Login;
