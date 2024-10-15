import React, { useState } from "react";
import axios from 'axios'

export default function AddTask(){
    const [task,setTask] = useState({
        taskname:'',
        taskdate:'',
        tasktime:''

    });

    const handleChange=(e)=>{
        setTask({...task,[e.target.name]:e.target.value})
    };
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const url="http://localhost:9000/addtask";
        try{
            const response = await axios.post(url,task);
            console.log(response)
            alert('Task added successfully');
            setTask({taskname:'',taskdate:'',tasktime:''});
        }catch(err){
            console.error('Error adding task',err)
            alert('Failed to add Task')
        }
    }
    return(
        <>
        <h1>Add Task</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={task.taskname}
            onChange={handleChange}
            name="taskname"
            placeholder="Task name"
            required/>

            <input
            type="text"
            value={task.taskdate}
            onChange={handleChange}
            name="taskdate"
            placeholder="Task date"
            required/>

           <input
            type="text"
            value={task.tasktime}
            onChange={handleChange}
            name="tasktime"
            placeholder="Task time"
            required/>
            
            <button type="submit">Add</button>

        </form>
        </>
    );
}