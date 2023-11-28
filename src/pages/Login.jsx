import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/authReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("12345");
  const { isLoading } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()


  // Function to handle form submission to login
  const handleSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();
    if (email !== "" && password !== "") {
      const payload = {
        email,
        password,
      };
      dispatch(userLogin(payload)).then((res) => {
        if (res.type === "USER_LOGIN_SUCCESS") {
          const goToPage = location.state.from || '/'
          navigate(goToPage, {replace:true});
          setEmail("");
          setPassword("");
        }
      });
    } else {
      alert("Please enter credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >
      <form
        style={{
          height: "fit-content",
          width: "300px",
          border: "1px solid lightgray",
          borderRadius: "10px",
          padding: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "lightgray",
              padding: "1rem",
              width: "90%",
              borderRadius: "5px",
              marginTop: "10px",
            }}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email: eve.holt@reqres.in"
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Password</label>
          <br />
          <input
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "lightgray",
              padding: "1rem",
              width: "90%",
              borderRadius: "5px",
              marginTop: "10px",
            }}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <br />
        <button
        disabled={isLoading}
          style={{
            border: "none",
            cursor: 'pointer',
            // cursor: {isLoading ? "progress" :"pointer"},
            borderRadius: "5px",
            marginTop: "1rem",
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
            padding: "8px 20px",
            width: "100%",
          }}
          type="submit"
        >
          {isLoading ? "loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Login;
