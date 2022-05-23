import Dialog from '@mui/material/Dialog';
import React from 'react';
import './button.css';


const emails = ['username@gmail.com', 'user02@gmail.com'];



export default function SimpleDialog(props: any) {
  const { setOpen, selectedValue, open } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const AddTask = (e:any)=>{
    console.log(e.target.TASK_ID.value)
    debugger
    fetch("https://localhost:7079/create-Task", { 

    method: "POST", 

    body: JSON.stringify({
      tId: e.target.TASK_ID.value,
      pId: e.target.Project_ID.value,
      assignTo: e.target.assignto.value,
      taskDetails: e.target.TASK_Detail_ID.value,
      taskStatusId: e.target.TASK_STATUS_ID.value,
      assignBy: e.target.ASSIGNED_BY.value
    }), 

    headers: { 

        "Content-type": "application/json; charset=UTF-8" 

    } 

})
  .then(response => handleClose)
  .then(data => console.log(data));

  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <form className='col-md-12'  onSubmit={AddTask}>
        <div className='form-group'>
      <label >Enter Task ID : </label>
        <input name='TASK_ID' placeholder='Type Id...' type="text"></input>
        </div>
        <div className='form-group'>
        <label>Enter Project ID :</label>
        <input name='Project_ID' placeholder='Type Project ID...'type="text" ></input>
        </div>
        <div className='form-group'>
        <label>Assign To :</label>
        <input name='assignto' placeholder='Type Assign To...' type="text"></input>
        </div>
        <div className='form-group'>
        <label>Enter Task Details :</label>
        <input name='TASK_Detail_ID' placeholder='Task Detail...' type="text"></input>
        </div>
        <div className='form-group'>
        <label>Enter Task Status Id :</label>
        <input name='TASK_STATUS_ID' placeholder='Task Status Id...' type="text"></input>
        </div>
        <div className='form-group'>
        <label>Assign By :</label>
        <input name='ASSIGNED_BY' placeholder='Assign By...' type="text"></input>
        </div>
        <div>
        <button className='Task_Button' type='submit'>ADD TASK</button>
        </div>
      </form>
    </Dialog>
  );
}


