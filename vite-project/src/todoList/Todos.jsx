import { MdDelete , MdEdit } from "react-icons/md";

function Todos({tasks, handleDelete , handleEdit }) {
  // console.log(tasks)
  return (
    <>
    <ul>
      {tasks.map((task) =>{
        return ( 
        <li key={task.id} className='flex justify-between items-center w-xl m-2 h-8 bg-green-400 rounded-[3px]'
        >
          <span className="pl-2">{task.task}</span> 
          <span className="flex bg-amber-500 rounded-r-[3px]">
          <MdDelete className="m-2" onClick={() => handleDelete(task.id)}/>
          <MdEdit  className="m-2" onClick={() => handleEdit(task.id)}/>
          </span>
          </li>
        );
      })}
    </ul>
    </>
  )
}

export default Todos ;