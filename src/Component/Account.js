import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFill } from "./Store/Slice";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

export const Account = () => {
  const [name, setName] = useState("");
  const [mob, setmob] = useState("");
  const [userName, setuserName] = useState("");
  const [pass, setPass] = useState("");
  const [index, setIndex] = useState("");
  const [check1, setCheck1] = useState(false);
  const [fill, setFill] = useState(false);
  const [aob, setAob] = useState(
    JSON.parse(localStorage.getItem("accountCreation")) || []
  );

  const state = useSelector((p) => p.data);
  let dispatch = useDispatch();
  let nav = useNavigate();

  const check = (e) => {
    //console.log(e.target.value)
    // e.preventDefault();
    if (e.target.name === "pname") {
      setName(e.target.value);
    } else if (e.target.name === "mobname") {
      setmob(e.target.value);
    } else if (e.target.name === "uname") {
      setuserName(e.target.value);
    } else if (e.target.name === "passname") {
      setPass(e.target.value);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    //console.log("ppp")
    if (name === "" || mob === "" || userName === "" || pass === "") {
      console.log("bye");
      setFill(true);
      // dispatch(updateFill(true))
    } else {
      let obj = {
        name,
        mob,
        userName,
        pass,
      };
      setAob(
        localStorage.setItem("accountCreation", JSON.stringify([...aob, obj]))
      );
      console.log([...aob, obj]);

      // localStorage.setItem("accountCreation",JSON.stringify([...aob,obj]))
      // const existingData = JSON.parse(localStorage.getItem("accountCreation")) || [];
      // localStorage.setItem("accountCreation", JSON.stringify([...existingData, obj]));

      setName("");
      setmob("");
      setuserName("");
      setPass("");
      setFill(true);
      //dispatch(updateFill(true))
      nav("/");
    }
  };

  return (
    <div>
      <div className="container mt-4" style={{ backgroundColor: "#7CB9E8",padding: "20px",borderRadius: "8px", width:"40%",height:"auto" }}>
        <h2>Sign-up</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="pname" className="form-label" > Name:</label>
            <input type="text" name="pname" value={name} onChange={check} className={`form-control ${fill && name === "" ? "is-invalid" : "" }`} />
            {fill && name === "" ? (<div className="invalid-feedback">Enter a name</div>) : ( "" )}
          </div>

          <div className="mb-3">
            <label htmlFor="mobname" className="form-label">
              Mobile number:
            </label>
            <input
              type="number"
              name="mobname"
              value={mob}
              onChange={check}
              className={`form-control ${
                fill && mob === "" ? "is-invalid" : ""
              }`}
            />
            {fill && mob === "" ? (
              <div className="invalid-feedback">Enter a mobile number</div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="uname" className="form-label">
              User Name:
            </label>
            <input
              type="text"
              name="uname"
              value={userName}
              onChange={check}
              className={`form-control ${
                fill && userName === "" ? "is-invalid" : ""
              }`}
            />
            {fill && userName === "" ? (
              <div className="invalid-feedback">Enter a user name</div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="passname" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="passname"
              value={pass}
              onChange={check}
              className={`form-control ${
                fill && pass === "" ? "is-invalid" : ""
              }`}
            />
            {fill && pass === "" ? (
              <div className="invalid-feedback">Enter a password</div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    // <div>
    //     <h2> Sign-up </h2>
    //     <form>
    //         <div>
    //         <label> Name : </label>
    //         <input type="text" name="pname" value={name} onChange={check}/>
    //         {fill&&name==="" ? <p> Enter a name</p>:""}
    //         </div>
    //         <div>
    //         <label> Mobile number : </label>
    //         <input type="number" name="mobname" value={mob} onChange={check} />
    //         {fill&&mob==="" ? <p> Enter a Mobile number </p>:""}
    //         </div>
    //         <div>
    //         <label> user Name : </label>
    //         <input type="text" name="uname" value={userName} onChange={check}/>
    //         {fill&&userName==="" ? <p> Enter a user name</p>:""}
    //         </div>
    //         <div>
    //         <label> password : </label>
    //         <input type="number" name="passname" value={pass} onChange={check} />
    //         {fill&&pass==="" ? <p> Enter a password</p>:""}
    //         </div>
    //         <div>
    //           {/* <button type="button" className="btn btn-outline-success" onClick={submit}>Submit</button> */}
    //           <button type="button" class="btn btn-outline-success">Success</button>

    //         </div>
    //     </form>

    // </div>
  );
};

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// export const Account = () => {
//     const [name, setName] = useState("");
//     const [mob, setMob] = useState("");
//     const [userName, setuserName] = useState("");
//     const [pass, setPass] = useState("");
//     const [isFill, setFill] = useState(false);
//     const [aob, setAob] = useState([])
//     const nav = useNavigate();
//     const change = (e) => {
//         if (e.target.name === 'name') {
//             setName(e.target.value)
//         }
//         else if (e.target.name === 'mob') {
//             setMob(e.target.value)
//         }
//         else if (e.target.name === 'uname') {
//             setuserName(e.target.value)
//         }
//         else {
//             setPass(e.target.value)
//         }
//     }
//     // const submit = (e) => {
//     //     e.preventDefault()

//     //     if (name === '' || mob === '' || userName === '' || pass === '') {
//     //         setFill(true)
//     //     }
//     //     else {
//     //         let obj = { name, mob, userName, pass }
//     //         setAob([...aob, obj])
//     //         console.log([...aob, obj])
//     //         localStorage.setItem("account", JSON.stringify([...aob,obj]))
//     //         setFill(false)
//     //         setMob('')
//     //         setName('')
//     //         setPass('')
//     //         setuserName('')
//     //         nav('/')
//     //     }
//     // }
//     const submit = (e)=>{
//         e.preventDefault();
//         //console.log("ppp")
//         if(name==="" || mob===""|| userName===""|| pass===""){
//             console.log("bye")
//             setFill(true)
//         // dispatch(updateFill(true))
//         }

//         else{
//             let obj = {
//                 name,mob,userName,pass
//             }
//             setAob([...aob,obj])
//             console.log([...aob,obj])
//             localStorage.setItem("account",JSON.stringify([...aob,obj]))
//             setName("")
//             setMob("")
//             setuserName("")
//             setPass("")
//             setFill(true)
//             //dispatch(updateFill(true))
//             nav('/')

//         }
//     }
//     return (
//         <div>
//             <div>
//                 <form>
//                     <div>
//                         <input type="text" placeholder="Name" onChange={change} name="name" value={name} />
//                         { isFill&& name === '' ? <p style={{ color: "red" }}>please enter a name</p> : ''}
//                     </div>
//                     <div>
//                         <input type="number" placeholder="Mobile Number" onChange={change} name="mob" value={mob} />
//                         {isFill && mob === '' ? <p style={{ color: "red" }}>please enter a mobile number</p> : ''}
//                     </div>
//                     <div>
//                         <input type="text" placeholder="User Name" onChange={change} name="uname" value={userName} />
//                         {isFill && userName === '' ? <p style={{ color: "red" }}>please enter a user name</p> : ''}
//                     </div>
//                     <div>
//                         <input type="text" placeholder="Password" onChange={change} value={pass} />
//                         {isFill && pass === '' ? <p style={{ color: "red" }}>please enter a user Password</p> : ''}
//                     </div>
//                     <div>
//                         <button onClick={submit}>Create Account</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
