const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://krankit6695:qwyhPn45AvuCZMBB@cluster0.hmpel.mongodb.net/", {
   
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
