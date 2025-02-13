const express =require('express');
const { createtodo } = require('./type');
const {todo } = require ('./db');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.post('/todo',async function(req,res){
    const createpayload=req.body;
    const parsedpayload=createtodo.safeParse(createpayload)
    if(!parsedpayload.success){
        console.log(parsedpayload.error);
        res.status(411).json({message: "you will give the wrong input "})
        return;
    }
    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed:false
    })
    res.json({message: "task created successfully"})
})
app.get('/todos',async function(req,res){
    const todos= await todo.find({})
    res.json({
        todos
    })

})
app.put("/completed",function(req,res){
    const updatepayload=req.body;
    const parsedpayload=updatepayload.safeParse(updatepayload)
    if(!parsedpayload.success){
        res.status(411).json({message: "you will give the wrong input "})
        return;
    }
    todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({message: "task completed successfully"})
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})







// const express = require('express');
// const { createtodo } = require('./type');
// const { todo } = require('./db');
// const cors = require('cors');

// const app = express();

// app.use(express.json());
// app.use(cors());

// // Create a new todo
// app.post('/todo', async function (req, res) {
//     const createpayload = req.body;
//     const parsedpayload = createtodo.safeParse(createpayload);

//     if (!parsedpayload.success) {
//         res.status(400).json({ message: "Invalid input" });
//         return;
//     }

//     await todo.create({
//         title: createpayload.title,
//         description: createpayload.description,
//         completed: false
//     });
    
//     res.json({ message: "Task created successfully" });
// });

// // Fetch all todos
// app.get('/todos', async function (req, res) {
//     const todos = await todo.find({});
//     res.json({ todos });
// });

// // Mark a todo as completed
// app.put("/completed", async function (req, res) {
//     const updatepayload = req.body;
//     const parsedpayload = createtodo.safeParse(updatepayload);  // Ensure correct schema

//     if (!parsedpayload.success) {
//         res.status(400).json({ message: "Invalid input" });
//         return;
//     }

//     await todo.updateOne(
//         { _id: updatepayload.id },
//         { completed: true }
//     );

//     res.json({ message: "Task marked as completed" });
// });

// // Start the server
// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });
