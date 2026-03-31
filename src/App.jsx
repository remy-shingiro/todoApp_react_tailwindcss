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
      </div>
    </>
  )
};