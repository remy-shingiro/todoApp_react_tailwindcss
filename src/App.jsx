import { useState } from "react"


export default function App () {
  const [input, setInPut] = useState('');
  const [todo, setTodo] = useState([]);

  function AddFunction(e) {
    e.preventDefault();
    if(input.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    }
    setTodo([...todo, newTodo]);
    setInPut('');
  }

  function toggleTodo (id) {
    const allTodos = todo.map((item)=>{
      if(item.id === id) {return {...item, completed: !item.completed}
    }
    return item;
    })
    setTodo(allTodos);
  }
  function deleteTodo(id) {
    const filteredTodos = todo.filter((item)=> item.id !==id);
    setTodo(filteredTodos)
  }
  

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-6xl text-gray-300">Todos</h1>
      </div>
      
      <div className="pl-60 pt-7 flex gap-4">
        
        <input 
        placeholder="Add todo..."
        type="text"
        className="flex bg-gray-100 items-center justify-center w-100 h-10 pl-10 rounded-3xl"
        value={input}
        onChange={e=> setInPut( e.target.value)}
         ></input>

         <button className="bg-blue-800 rounded-3xl w-15"
         onClick={AddFunction}> Add +</button>
          {/* Todos container */}
         
      </div>
      <div className="pl-70 pt-5">
          {todo.map((n) => (
            <div key={n.id} className="flex gap-3 pt-5">
              <input
              type="checkbox"
              checked={n.completed}
              onChange={()=> toggleTodo(n.id)}
               >
                
                
               </input>
               <p className={n.completed ? "line-through text-pink-600" : ''}>{n.text}</p>

               <button className="bg-red-600 rounded-2xl w-10"
               onClick={()=> deleteTodo(n.id)}
               >🗑️</button>
            </div>
            
            
          ))}
         </div>
    </>
  )
};