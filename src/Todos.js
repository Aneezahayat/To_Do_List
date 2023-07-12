import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import './todo.css';
function Todos(){
    const [todos,setTodos]=useState([]);
    const [inputValue,setinputValue]=useState('');
    
    const handleInputChange=(event)=>{
    setinputValue(event.target.value);
    console.log(inputValue);
}
const handleAddTasks =()=>{
    if(inputValue.trim()!==''){
        const  newArr = [...todos,inputValue];
        setTodos(newArr);
        setinputValue('');
    }
}
const handleDeleteTasks = (index)=>{
    const temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
}
    return(
      <div className='container'> 
        <div className="container1 text-center mt-5">
            <h1 className='heading'>To Do List</h1>
            <div className="gap">
              <TextField id="outlined-basic" label="Enter Tasks" variant="outlined" onChange={handleInputChange} value={inputValue} />
              <Button variant="contained" size="large" onClick={handleAddTasks}>ADD</Button>
            </div>
            <div className='parent'>
                  <div className='hey mt-5'>
              <List>
                  {todos.map((value,index)=>(
                      <ListItem>
                      <ListItemButton >
                        <ListItemText primary={value}/>
                        <Button className='btn' startIcon={<DeleteIcon />} variant="contained" size="large" onClick={()=> handleDeleteTasks(index)}>Delete</Button>
                      </ListItemButton>
                    </ListItem>
                  ))}
              
                </List>
              </div>
            </div>
        
        </div>
      </div>
    );
}
export default Todos;