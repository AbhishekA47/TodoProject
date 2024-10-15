import React ,{useState,useEffect,useRef} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function Edit(){
    const {taskid} =useParams()
    const {refElement} = useRef(null)
    const[task,setTask]=useState({});
    const params = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:9000/findById/${params.taskid}`)
        .then((res) => {
            console.log(res.data)
            const record = res.data;


            const element = refElement.current;
            if(element){
                element['taskname'].value = record.taskname;
                element['taskdate'].value = record.taskdate;
                element['tasktime'].value = record.tasktime;

                      }
         setTask(record);
        })
        .catch((err)=>console.log(err));
    },[taskid]);


    const handleChange=(e)=>{
        setTask({...task,[e.target.name]:e.target.value})
    };
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const url=`http://localhost:9000/updateData/${taskid}`;

        try{
            const response = await axios.put(url,task,{headers :{taskid}});
            console.log(response.data)
            alert('Task Updated successfully');
        }catch(err){
            console.error('Error Updating task',err)
            alert('Failed Update Task')
        }
    }
    
    return(
<>
          <h1>Edit Task</h1>
          <h2>{params.taskid}</h2>
          <form ref={refElement} onSubmit={handleSubmit}>
            <input type="text" name="taskname" defaultValue={task.taskname} onChange={handleChange}/>
            <input type="text" name="taskdate" defaultValue={task.taskdate} onChange={handleChange}/>
            <input type="text" name="tasktime" defaultValue={task.tasktime} onChange={handleChange}/>

            <button type="submit">Submit</button>
          </form>
</>
    )
}