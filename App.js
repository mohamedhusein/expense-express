// importing express and intialazing
const express= require("express")
const app= express()


const expenses = [{id:1,description:"Food",amount:35}]


// get all expenses  
app.get("/expenses", (req, res)=>{
    res.status(200).json({found:expenses.length, expenses})
})

 //post new expenses
app.post("/expense",(req,res)=>{
  
    const id = expenses[expenses.length-1].id? expenses[expenses.length-1].id+1: 1;
    const newExp={
        id:id,
        description:req.body.description,
        amount:req.body.amount
    }
    expenses.push(newExp)
    res.status(201).json({message:"expenses created succesfully"})
  
})

// // total expenses 
// app.post("/expenses,"(req,res)=>{
//     const id = expenses[expenses.length-1].id? expenses[expenses.length-1].id+1 : 1;
// })


const PORT=8000
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})