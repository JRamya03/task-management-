import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFill, updateAuth } from "./Store/Slice";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setPass] = useState("");
  const [crt, setCrt] = useState(false);
  const [fill, setFill] = useState(false);
  const [isname, issetName] = useState(false);
  const [ispass, issetPass] = useState(false);

  let dispatch = useDispatch();
  let nav = useNavigate();

  const click = (e) => {
    // e.preventDefault(
    if (e.target.name === "uname") {
      setuserName(e.target.value);
    } else if (e.target.name === "passname") {
      setPass(e.target.value);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (userName === "" || password === "") {
      console.log("bye");
      //dispatch(updateFill(true))
      setFill(true);
    } else {
      let x = JSON.parse(localStorage.getItem("accountCreation")).some(
        (val) => {
          if (val.userName !== userName && val.pass !== password) {
            issetName(true);
            issetPass(true);
          } else if (val.userName === userName && val.pass !== password) {
            issetPass(true);
            issetName(false);
          } else if (val.userName !== userName && val.pass === password) {
            issetPass(false);
            issetName(true);
          } else {
            return val.userName === userName && val.pass === password;
          }
        }
      );
      if (x) {
        dispatch(updateAuth(true));
      }
    }
  };

  return (
    <div>
    <div className="cotainer">
      <div className="container mt-4"  style={{ backgroundColor: "#7CB9E8", padding: "20px", borderRadius: "8px", width:"40%",height:"410px"}}>
        <h3 className="mb-4">Sign-In</h3>
        <form>
          <div className="mb-3">
            <label for="uname" className="form-label">Username</label>
            <input type="text" name="uname"value={userName} onChange={click} placeholder="Username"className={`form-control ${fill && userName === "" ? "is-invalid" : ""}`}/>
            {fill && userName === "" ? (<div className="invalid-feedback">Username cannot be empty</div>) : ( "" )}
            {isname ? ( <p className="text-danger">Enter a valid username</p>) : (  "" )}
          </div>

          <div className="mb-3">
            <label for="passname" className="form-label"> Password</label>
            <input type="password" name="passname" value={password} onChange={click} placeholder="Password" className={`form-control ${  fill && password === "" ? "is-invalid" : ""}`}/>
            {fill && password === "" ? (<div className="invalid-feedback">Password cannot be empty</div> ) : ( "")}
             {ispass ? (<p className="text-danger">Enter a valid password</p>) : ("")}
          </div>
          <div className="mb-3">
            <button onClick={submit} className="btn btn-outline-success mb-2">Submit </button>
            <Link to="/acc" className="ms-2 btn btn-outline-secondary mb-2">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
