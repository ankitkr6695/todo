const mongoose = require('mongoose');
<<<<<<< HEAD
require('dotenv').config();
//mongoose.connect("mongodb+srv://krankit6695:<krankit6695>@cluster0.sllugde.mongodb.net/todo")
//mongodb+srv://krankit6695:qwyhPn45AvuCZMBB@cluster0.hmpel.mongodb.net/
//qwyhPn45AvuCZMBB
mongoose.connect(process.env.MONGO_URL, {
=======


mongoose.connect("mongodb+srv://krankit6695:qwyhPn45AvuCZMBB@cluster0.hmpel.mongodb.net/", {
>>>>>>> 307a796dcab39bcb6bbf413d6c42768849f999fc
   
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


const todoschema= mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todo',todoschema);
module.exports ={
    todo
}
