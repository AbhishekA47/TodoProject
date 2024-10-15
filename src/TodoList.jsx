// import { useState,useEffect } from "react";
// import axios from "axios";

// export default function TodoList(){
//     const [record,setRecord] = useState([])
//     const [search,setSearch] = useState("")
//     useEffect(()=>{
//         const url = "http://localhost:9000/fetchTask"
//         axios.get(url)
//         .then((res)=>{
//             console.log(res)
//             setRecord(res.data)
//         })
//         .catch(err=>console.log(err))
//     },[record])

//     return(
//         <>
//         <div>
//             <input type="text" name="search" placeholder="Search by taskname" onChange={(e)=>setSearch(e.target.value)}/>
//         </div>
//         <a href="/addTask">AddTask</a>
//         <div>
//             <table border="1">
//                 <tr>
//                     <th>Task Name</th>
//                     <th>Task Date</th>
//                     <th>Task Time</th>
//                     <th>Action</th>
//                 </tr>
//                 {
//                     record.map((items,index)=>{
//                      return(
//                         <tr>
//                             <td>{items.taskname}</td>
//                             <td>{items.taskdate}</td>
//                             <td>{items.tasktime}</td>
//                             <td><a href={`/editpage/${items._id}`}/></td>
//                         </tr>
//                      )
//                     })
//                 }
//             </table>
//         </div>
//         </>
//     )
// }
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function TodoList() {
    const [record, setRecord] = useState([]);
    

    useEffect(() => {
        const url = "http://localhost:9000/fetchTask";
        axios.get(url)
            .then((res) => {
                console.log(res);
                setRecord(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (taskId) => {
        const url = `http://localhost:9000/taskdelete/${taskId}`;
        axios.delete(url)
            .then((res) => {
                alert('deleted successfully');
                
                setRecord(record.filter(item => item._id !== taskId));
            })
            .catch((err) => {
                console.error('Error deleting', err);
                alert('Failed to delete');
            });
    };

    return (
        <>
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Task name</th>
                            <th>Task date</th>
                            <th>Task time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((item) => (
                            <tr key={item._id}>
                                <td >{item.taskname}</td>
                                <td>{item.taskdate}</td>
                                <td>{item.tasktime}</td>
                                <td>
                                    <a href={`/edit/${item._id}`}>Edit</a>
                                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

