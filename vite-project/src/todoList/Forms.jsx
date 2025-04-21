
function Forms({input , setInput , handleSubmit , isEditing}) {
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" className="h-[50px] w-xl pl-2 hover:bg-blue-400 bg-blue-600 m-2 rounded-[5px]" 
        placeholder="Enter your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="h-[50px] hover:bg-cyan-400 bg-blue-600 w-[100px] m-2 rounded-[5px]" >
          { isEditing ? "Edit Task" : "Add Task"}
          </button>
    </form>
    </>
  )
}

export default Forms