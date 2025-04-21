import "./Todo.css"
import Forms from "./Forms.jsx";
import Todos from "./Todos.jsx";
import {useState} from "react";


function Main() {
    const [input , setInput] = useState("");
    const [tasks , setTasks] = useState([]);
    const [isEditing , setisEditing] = useState(false);
    const [idToEdit , setidToEdit] = useState(null) ;

    function handleSubmit(e){
        e.preventDefault();
        // setTasks([...tasks , input]); tasks.push(input);

        if(isEditing){
          //Editing existing tasks
          setTasks(
            tasks.map((existing) => 
              existing.id === idToEdit ? { ...existing , task : input } : existing
            )
          );
          //Reset 
          setisEditing(false);
          setidToEdit(null);
        }else{
          //create a new Task
          const obj = {task : input , id : Date.now()};
          setTasks([...tasks, obj]); //array of Objects
        }

        setInput("");  //reseting the input
    }

    function handleDelete(idToDelete){
      setTasks(tasks.filter((task) => task.id !== idToDelete));
    }

    function handleEdit(idToEdit){
      const taskToEdit = tasks.find((task) => task.id === idToEdit);
      setInput(taskToEdit.task);
      setisEditing(true);
      setidToEdit(idToEdit);
    }

  return (
   <>
   <Forms input={input} setInput={setInput} handleSubmit = {handleSubmit} isEditing={isEditing}/>
   <Todos tasks = {tasks} handleDelete={handleDelete} handleEdit={handleEdit}/>
   </>
  )
}

export default Main;