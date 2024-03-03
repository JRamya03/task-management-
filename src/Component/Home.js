import React, { useState,useEffect } from "react";

// import "bootstrap/dist/js/bootstrap.bundle.min";
// import { Button } from 'react-bootstrap'; 
import { Link, useNavigate,useSearchParams } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { updateArr, updateAuth } from "./Store/Slice";

export const Home =()=>{
    const [task,setTask] = useState("");
    const [des,setDes] = useState("");
    const [status,setStatus] = useState("");
    const[fill,setFill] = useState(false);
    const[check1,setCheck1] = useState(false);
    const [index,setIndex]=useState();
    const[det,setDet]= useState([]);
     //const [arr,setArr] = useState([]);
    const state = useSelector((r)=>r.data)
    
    let nav=useNavigate()
     let dispatch = useDispatch()
    
     let[param]=useSearchParams();
     let y = Number(param.get('id'));
     console.log(y)
   
       useEffect(()=>{
        if(param.get('id')!==null){
           let b = state.arr.find((v,i)=>{
            return y === i 
           })
           //console.log(b)
           setTask(b.name)
           setDes(b.description)
           setStatus(b.status)
        }
        else{
            dispatch(updateArr(state.arr))
            setTask("")
            setDes("")
            setStatus("")
        }
       },[state,y])

    // useEffect(() => {
    //     if (taskId) {
    //         const existingTask = state.arr.find(task => task.id === parseInt(taskId));
    //         if (existingTask) {
    //             setTask(existingTask.name);
    //             setDes(existingTask.description);
    //             setRadio(existingTask.status);
    //         }
    //     }
    // }, [taskId, state.arr]);
 
    const submit = (e)=>{
        e.preventDefault()
        if(task==="" || des==="" || status===""){
            console.log("bye")
          setFill(true)
          alert("fill all the field")
        }
        else if (param.get('id')!==null){
            const display = {
                name: task,
                description:des,
                status: status , 
                subTime: new Date()
        }
           const checkEdit=state.arr.map((v,i)=>{
            return y === i ? display : v
        })
        dispatch(updateArr(checkEdit))
        nav('/tab')
        }
        else{
        const display = {
            name: task,
            description:des,
            status: status , 
            subTime: new Date(),
            
    }
    dispatch(updateArr([...state.arr,display]))
    setTask("")
    setDes("")
    setStatus("") 
    nav('/tab')
 }
    }
    
    const check = (e)=>{
          e.preventDefault()
          if(e.target.name==="tname"){
            setTask(e.target.value)
        }
        else if(e.target.name==="desname"){
            setDes(e.target.value)
        }
        else if(e.target.name==="stsname"){
            setStatus(e.target.value)
        }
    }
    return (

        <div className="container mt-4"   style={{ backgroundColor: "#7CB9E8", padding: "20px", borderRadius: "8px", width:"40%",height:"450px"}}>
       <h1 >Form</h1>
  <form >
    <div className=" mt-3 mb-3">
      <label htmlFor="tname" className="form-label">Project Name</label>
      <input className="form-control" type="text" value={task} name="tname" onChange={check} placeholder="Task Name" />
    </div>

    <div className="mb-3">
      <label htmlFor="desname" className="form-label">Project Description</label>
      <input className="form-control" type="text" value={des} name="desname" onChange={check} placeholder="Task Description"/>
    </div>

    <div className="mb-3 form-control">

      <div className="form-check ">
        <input className="form-check-input"  type="radio" checked={status === "Completed"} onChange={() => setStatus("Completed")}/>
        <label className="form-check-label">Completed</label>
      </div>
      
      <div className="form-check">
        <input className="form-check-input" type="radio" checked={status === "not-Completed"} onChange={() => setStatus("not-Completed")}/>
        <label className="form-check-label">Not Completed</label>
      </div>
    </div>

    <button onClick={submit} type="button" className="btn btn-success">Submit</button>
  </form>
</div>

        // <div> 
        //    <> 
        //      <h1 style={{width : "100%",backgroundColor:"red"}}>form</h1>
        //      <Link to="/"> <IoMdHome /> </Link>
             
        //     </>
        //        <form>
        //         <div>
        //             <div className="mb-3 ">
        //              <label className="form-label"> Project Name </label>
        //              <input className="form-control" type="text" value={task} name="tname" onChange={check} placeholder="task name"/>
        //             </div>
        //             <div className="mb-3">
        //              <label className="form-label"> Project description </label>
        //              <input className="form-control" type="text" value={des} name="desname" onChange={check} placeholder="task des"/>
        //             </div>
        //             <div className="mb-3">
        //                 <div>
        //                 <div class="form-check">
        //                     <input class="form-check-input" type="radio"  checked={status === "Completed"} onChange={()=>setStatus("Completed")} />
        //                     <label class="form-check-label"> Completed</label>
        //                 </div>
        //                 <div class="form-check">
        //                     <input class="form-check-input" type="radio"  checked={status === "not-Completed"} onChange={()=>setStatus("not-Completed")} />
        //                     <label class="form-check-label"> not Completed</label>
        //                 </div>
        //                 {/* <label className="form-label"> Task-Status </label>
        //                 <input className="form-control" type="radio"   name="stsname" onChange={check} value={status} id="id-completed"/>
        //                 <label className="form-label" for="id-completed"> completed </label>
        //                 <input className="form-control" type="radio"  name="stsname"  onChange={check} value={status} id="id-completed"/>
        //                 <label className="form-label" for="id-completed"> not - completed </label> */}
        //                 </div>
        //             </div>
        //            <button onClick={submit} type="button" class="btn btn-success">submit</button>

        //            {/* <Table data={arr} /> */}

        //         </div>
        //         </form>

        // </div>
    )
}