const express =require('express')
const cors =require('cors')
const app =express();
require('dotenv').config();
const overAllitems= require("./data")


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
    res.send('hellow world')
})



app.get('/api/course/:id',(req,res)=>{
    console.log(req.params.id)
  const course =  courses.find((e)=>e.id===parseInt(req.params.id))
  res.send(course)
  console.log(course)
})


app.get('/api/item_cetegory',(req,res)=>{
    res.send(overAllitems)
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