import { useState } from "react";

 function createtode(){
    const [title, setTitle]=useState("")
    const [description, setDescription]=useState("")
    return <div>
    <div class="flex w-72 flex-col">
    <div class="w-full max-w-sm min-w-[200px]">
    <input 
    class="w-full bg-transparent placeholder:text-slate-400 text-black text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow  flex items-center justify-center" id="title" type="text" placeholder="Title" onChange={function(e){
            setTitle(e.target.value)
        }}></input><br></br>
    </div>
    <div class="w-full max-w-sm min-w-[200px]">
    <input class="w-full bg-transparent placeholder:text-slate-400 text-black text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow"
     id="description" type="text" placeholder="Description" onChange={function(e){
            
            setDescription(e.target.value)
        }}></input><br></br>
    </div>
    
        
    </div>
        
        <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={()=>{
        fetch("http://localhost:3000/todo",{
            method:'POST',
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(async (res)=>{
            const json=await res.json()
            alert("todo created")
        
        })
        }}>Add a todo</button>
    </div>
}

export default createtode;