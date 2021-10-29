import React from "react";
import "./crud.css"
import Tasks from './Tasks';
import AddTask from './AddTask';
import Header from './Header';
import './crud.css'
// Importing React Hooks
import { useState, useEffect } from 'react';
// Importing Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";


export default function CrudBuilding() {
   // All States
   const [loading, setloading] = useState(true); // Pre-loader before page renders
   const [tasks, setTasks] = useState([]); // Task State
   const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form

   // Pre-loader
   useEffect(() => {
       setTimeout(() => {
           setloading(false);
       }, 3500);
   }, [])

   // Fetching from Local Storage
   const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

   useEffect(() => {
       if (getTasks == null) {
           setTasks([])
       } else {
           setTasks(getTasks);
       }
       // eslint-disable-next-line
   }, [])

   // Add Task
   const addTask = (task) => {
       const id = uuidv4();
       const newTask = { id, ...task }

       setTasks([...tasks, newTask]);

       Swal.fire({
           icon: 'success',
           title: 'Yay...',
           text: 'You have successfully added a new task!'
       })

       localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
   }

   // Delete Task
   const deleteTask = (id) => {
       const deleteTask = tasks.filter((task) => task.id !== id);

       setTasks(deleteTask);

       Swal.fire({
           icon: 'success',
           title: 'Oops...',
           text: 'You have successfully deleted a task!'
       })

       localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
   }

   // Edit Task
   const editTask = (id) => {

       const text = prompt("Task Name");
       const day = prompt("Day and Time");
       let data = JSON.parse(localStorage.getItem('taskAdded'));

       const myData = data.map(x => {
           if (x.id === id) {
               return {
                   ...x,
                   text: text,
                   day: day,
                   id: uuidv4()
               }
           }
           return x;
       })

       Swal.fire({
           icon: 'success',
           title: 'Yay...',
           text: 'You have successfully edited an existing task!'
       })

       localStorage.setItem("taskAdded", JSON.stringify(myData));
       window.location.reload();
   }

  return (
    <div className="buildings">
      
                {/* loading
                    ?
                    <div className="spinnerContainer">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : */}
                    <div className="container">
                        {/* App Header that has open and App Name */}
                        <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />

                        {/* Revealing of Add Task Form */}
                        {showAddTask && <AddTask onSave={addTask} />}

                        {/* Task Counter */}
                        <h3>Number of Tasks: {tasks.length}</h3>

                        {/* Displaying of Tasks */}
                        {
                            tasks.length > 0
                                ?
                                (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />)
                                :
                                ('No Building Found!')
                        }
                    </div>
            
    </div>
  )
}


// export default function CrudBuilding() {
//   var selectedRow = null

// function onFormSubmit(e) {
//   //e.preventDefault();

//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         else
//             updateRecord(formData);
//         resetForm();
//     }
// }

// function readFormData() {
//     var formData = {};
//     formData["bNum"] = document.getElementById("bNum").value;
//     formData["bName"] = document.getElementById("bName").value;
   
//     return formData;
// }

// function insertNewRecord(data) {
//     var table = document.getElementById("buildingList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     var cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.bNum;
//    var  cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.bName;
   
//     var cell4 = newRow.insertCell(2);
//     cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
//                        <a onClick="onDelete(this)">Delete</a>`;
// }

// function resetForm() {
//     document.getElementById("bNum").value = "";
//     document.getElementById("bName").value = "";
    
//     selectedRow = null;
// }

// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("bNum").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("bName").value = selectedRow.cells[1].innerHTML;
 
// }
// function updateRecord(formData) {
//     selectedRow.cells[0].innerHTML = formData.bNum;
//     selectedRow.cells[1].innerHTML = formData.bName;

// }

// function onDelete(td) {
  
//     if (window.confirm('Are you sure to delete this record ?')) {
//         var row = td.parentElement.parentElement;
//         document.getElementById("buildingList").deleteRow(row.rowIndex);
//         resetForm();
//     }
// }
// function validate() {
//     var isValid = true;
//     if (document.getElementById("bNum").value == "") {
//         isValid = false;
//         document.getElementById("bNumValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("bNumValidationError").classList.contains("hide"))
//             document.getElementById("bNumValidationError").classList.add("hide");
//     }
//     return isValid;
//   }
//   return (
//     <body className="crud_building_body">
//     <div className="crud_building">
      
//       <h1 className="title">Hello!</h1>
//       <h3 className="title1">Register a Lunamar Building</h3>
//       <div className="container">
//         <table>
//           <tr>
//             <td>
//               <form
//                 onsubmit={onFormSubmit()}
//                 autocomplete="off"
//               >
//                 <div>
//                   <label>Building #</label>
//                   <label className="validation-error hide" id="bNumValidationError">
//                     This field is required.
//                   </label>
//                   <input type="number" name="bNum" id="bNum" />
//                 </div>
//                 <div>
//                   <label>Building Name</label>
//                   <input type="text" name="bName" id="bName" />
//                 </div>

//                 <div className="form-action-buttons">
//                   <input type="submit" value="Submit" />
//                   <input type="reset" value="Reset" />
//                 </div>
//               </form>
//               <td>
//                 <table className="list" id="buildingList">
//                   <thead>
//                     <tr>
//                       <th>Buildings #</th>
//                       <th>Building Name</th>
//                       <th>Edit/Delete</th>
//                     </tr>
//                     <tr>
//                       <td>01</td>
//                       <td>Building 01</td>
//                       <td>
//                         <a onClick={onEdit(this)}>Edit</a>
//                         <a onClick={onDelete(this)}>Delete</a>
//                       </td>
//                     </tr>

//                     <tr>
//                       <td>02</td>
//                       <td>Building 02</td>
//                       <td>
//                         <a onClick={onEdit(this)}>Edit</a>
//                         <a onClick={onDelete(this)}>Delete</a>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>03</td>
//                       <td>Building 03</td>
//                       <td>
//                         <a onClick={onEdit(this)}>Edit</a>
//                         <a onClick={onDelete(this)}>Delete</a>
//                       </td>
//                     </tr>
//                   </thead>
//                   <tbody></tbody>
//                 </table>
//               </td>
//             </td>
//           </tr>
//         </table>
//       </div>
      
//     </div>
//     </body>
    
//   );
// }
