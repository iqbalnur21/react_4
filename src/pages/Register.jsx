import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    const payload = {
      name: name,
      username: username,
      password: password,
      roleId: 2,
    };
    console.log(payload);
    axios
      .post("https://api.mudoapi.tech/register", payload)
      .then((res) => {
        console.log(res);
        const token = res.data.data.token;
        if (token) {
          setNotif("Berhasil Daftar");
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Register Page</h1>
      {!!notif.length && <h1>{notif}</h1>}
      <input
        type="text"
        placeholder="name"
        value={name}
        // onChange={handleOnChangename}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
