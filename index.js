const express =require('express')
const cors =require('cors')
const app =express();
require('dotenv').config();
const overAllitems= require("./data")
const emergencyItem=require("./emergencyData") 

const courses=[
    {
        id:1,
        name:"math"
    },
    {
        id:2,
        name:"english"
    },
    {
        id:3,
        name:"science"
    }
]

app.use(cors())

app.get('/',(req,res)=>{
    
    res.send("how are khana kha ke jana")
})


app.post('/v1/login',(req,res)=>{
    res.send("login done ")
})

app.post('/api/v1/site/all',(req,res)=>{
    res.send(emergencyItem)
    
})

app.post('/api/v1/add/user/site/users/:id',(req,res)=>{
    
})



app.get('/api/course/:id',(req,res)=>{
    console.log(req.params.id)
  const course =  courses.find((e)=>e.id===parseInt(req.params.id))
  res.send(course)
  console.log(course)
})


app.post('/api/item_cetegory',(req,res)=>{
    res.send(emergencyItem)
    console.log(overAllitems)
})


app.get('/api/course',(req,res)=>{
//     console.log(req.params.id)
//   const course=  courses.find((e)=>e.id===parseInt(req.params.id))
  res.send(courses)
  //console.log(course)
})

console.log(process.env.PORT)
const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`listening at port  ${port}...`)
})