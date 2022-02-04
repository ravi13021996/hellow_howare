const express =require('express')
const cors =require('cors')
const app =express();
require('dotenv').config();
const overAllitems= require("./data")
const emergencyItem=require("./emergencyData") 
const mongoose =require('mongoose')
const User=require("./model/userSchema")
const bodyParser =require('body-parser')
app.use(bodyParser.json());
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
let db="mongodb+srv://emergency1:Ravi%402020@cluster0.l0zir.mongodb.net/emergency1?retryWrites=true&w=majority";
mongoose.connect(db,{
   useNewUrlParser:true,
   useUnifiedTopology:true,



}).then(()=>console.log("successful connect")).catch((err)=>console.log(err,"error to check kro"))

app.use(express.json())

app.use(cors())

app.get('/',(req,res)=>{
    
    res.send("how are khana kha ke jana")
})


app.post('/v1/login',(req,res)=>{
    res.send("login done ")
})


app.post('/api/v1/site/all',async (req,res)=>{
    
    if(req.body.id){
        let temp =await User.find({id:req.body.id})
        res.send(temp)
    }
    else{
        let temp =await User.find()
        res.send(temp)
    }
    
    
    
})
app.post('/api/v1/add/user/site/users/:id',(req,res)=>{
    //console.log(parseInt(req.params.id))
    const singleEmergency=emergencyItem.find((e)=>e.id===parseInt(req.params.id))
    res.send(singleEmergency)
})

let id=10;
let id1
    let name1
    let isActive1
let geofenceColour= null

let geofenceType= null
let radius= null
let userCount= 0
let stoppageAllowed= null
let stoppageHour= null
let stoppageMin= null
let zoomLevel=null
let parentSiteId= null
let parentSite=null
let coordinatesDTOList= []
let entryAlertUserList= []
let exitAlertUserList= []

let createdAt= null
let createdBy= null
let updatedAt= "2022-02-01T08:06:02.000+00:00"
let updatedBy= null
let isActive= true
let roles= null
let siteTypeDTO= {
    id: 1,
     name: "HO",
     isActive: true
}
let subSiteDTOList= []
let allocatedVehicle= 0
let gpsInstalled= 0
let vehicleCount= 0
let zoneId= 1
let zoneName= "zone "
let vendorCount= null
let fplList= []
let userDTOs= []
let hierarchyList= null

app.post('/api/v1/add/user/site/role',async (req,res)=>{
    
    //let id=11;
    //console.log(req.body)
    if(req.body.id){
        const {id,code, name, zoneId, companyId, address, latitude, longitude, siteTypeId, type,siteHierarchy}=req.body
        await User.updateOne({id:req.body.id},{
            $set:{
                code:req.body.code,
                name:req.body.name,
                zoneId:req.body.zoneId,
                companyId:req.body.companyId,
                address:req.body.address, 
                latitude:req.body.latitude,
                longitude:req.body.longitude, 
                siteTypeId:req.body.siteTypeId, 
                type:req.body.typecode,
                
                
            }
        }).then(()=>res.send({messege:"document updated done"}))
    }
    else{
        let id=11;
        const {code, name, zoneId, companyId, address, latitude, longitude, siteTypeId, type,siteHierarchy}=req.body
        id =id+ await User.countDocuments()
    
        console.log({code, name, zoneId, companyId, address, latitude, longitude, siteTypeId, type,siteHierarchy})
        const user=new User({id,code, name, zoneId, companyId, address, latitude, longitude, siteTypeId, type,siteHierarchy,geofenceColour,geofenceType,radius,userCount,stoppageAllowed,stoppageHour,stoppageMin,zoomLevel,parentSiteId,parentSite,coordinatesDTOList,entryAlertUserList,exitAlertUserList,companyId,createdAt,createdBy,updatedAt,updatedBy,isActive,roles,siteTypeDTO,subSiteDTOList,allocatedVehicle,gpsInstalled,vehicleCount,zoneId,zoneName,vendorCount,fplList,userDTOs,hierarchyList})
        user.save().then(()=>res.json({message:"user save successfully"})).catch((err)=>res.send({message:"pleasefill all data correct"}))
    
    }
    
    
    
    
    
        
})



app.get('/api/course/:id',(req,res)=>{
    console.log(req.params.id)
  const course =  courses.find((e)=>e.id===parseInt(req.params.id))
  res.send(course)
  console.log(course)
})


app.get('/api/item_cetegory',(req,res)=>{
    res.send(overAllitems)
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