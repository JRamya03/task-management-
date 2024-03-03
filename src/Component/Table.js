
// Table.js
import React from "react";
import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateArr } from "./Store/Slice";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate,useSearchParams } from "react-router-dom";
export const Table = () => {
  const nav = useNavigate();
  const[cart,setCart]=useState([]);
  const[det,setDet]= useState([]);

  const [check,setCheck]=useState(false)
 // const[check,setCheck] = useState(false)
  const dispatch = useDispatch();
  const state = useSelector((ram) => ram.data);
  //console.log(state)
  
  

 const del = (v,index)=>{
  const del1=state.arr.filter((value,ind)=>{
    return index === ind ? "" : value
    }) 
    dispatch(updateArr(del1))
    
 }

 const edit = (index) => {
  nav(`/?id=${index}`)
  
}

const gohome = ()=>{
  nav('/')
}

// const prodetail=(id)=>{
//   nav(`/prodetail?id=${id}`)
//    }   
 
  return (

    // <div class="container">
    //   <h3> TASK MANAGEMENT </h3>
    //   <div>
    //     <table className="table table-striped">
    //       <thead>
    //         <tr>
    //           <th>project ID</th>
    //           <th>Project Name</th>
    //           <th>Project Description</th>
    //           <th>Task Status</th>
    //           <th>Task Time</th>
    //           <th>Edit</th>
    //           <th>Delete</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {state.arr.map((v, index) => (
    //           <tr key={index}>
    //             <td>{v.id}</td>
    //            <td>{v.name}</td>
    //            <td>{v.description}</td>
    //             <td>{v.status}</td>
    //             <td>{new Date(v.subTime).toLocaleString()}</td>
    //             <td>
    //             <button type="button" class="btn btn-outline-primary" onClick={()=>edit (index)}>edit</button>
    //             </td>
    //             <td>
    //             <button type="button" class="btn btn-outline-danger" onClick={()=>del(v,index)}>delete</button>
    //             </td>
    //              {/* <td>{v.subTime}</td> */}
    //          </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>

    //   <button >Submit</button>
    // </div>

    <div className="container mt-4" style={{ backgroundColor: "#7CB9E8", padding: "20px", borderRadius: "8px"}}>
  <h3 className="mt-4 mb-4">TASK MANAGEMENT</h3>
  <div>
    <table className="table table-striped">
      <thead>
        <tr>
         
          <th>Project Name</th>
          <th>Project Description</th>
          <th>Task Status</th>
          <th>Task Time</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {state.arr.map((v, index) => (
          <tr key={index}>
           
            <td>{v.name}</td>
            <td>{v.description}</td>
            <td>{v.status}</td>
            <td>{new Date(v.subTime).toLocaleString()}</td>
            <td>
              <button type="button" className="btn btn-outline-primary" onClick={() => edit(index)}>Edit</button>
            </td>
            <td>
              <button type="button" className="btn btn-outline-danger" onClick={() => del(v, index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  <button className="btn btn-primary" onClick={gohome}>Go back</button>
</div>

  );
};





