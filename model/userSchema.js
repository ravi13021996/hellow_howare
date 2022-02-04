const mongoose =require('mongoose');

const userSchema=new mongoose.Schema({
    id: {
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    image:{type:String,},
    pincode: {type:String,},
    phoneNumber: {type:String,},
    address: {
        type:String,
        required:true
    },
    latitude: {
        type:String,
        required:true},
    longitude:{
        type:String,
        required:true
    },
    geofenceColour: {type:String,},
    geofenceType: {
        type:String
    },
    radius: {
        type:String,
    },
    userCount: {
        type:String
    },
    stoppageAllowed:{
        type:String
    },
    stoppageHour: {
        type:String
    },
    stoppageMin: {
        type:String
    },
    zoomLevel: {type:String},
    parentSiteId: {type:String},
    parentSite: {type:String},
    coordinatesDTOList: {
        type:Array
    },
    entryAlertUserList: {
        type:Array
    },
    exitAlertUserList: {
        type:Array
    },
    companyId: {
        type:String,
    },
    siteTypeId: {type:String},
    createdAt: {type:String},
    createdBy: {type:String},
    updatedAt: {
        type:String
        
    },
    updatedBy: {type:String},
    isActive: {
        type:String
    },
    roles: {type:String},
    siteTypeDTO: {
        id: {
            type:Number
        },
        name: {
            type:String
        },
        isActive: {
            type:String
        }
    },
    subSiteDTOList: {
        type:Array,
    },
    allocatedVehicle:{
        type:String
    },
    gpsInstalled: {
        type:String,
    },
    vehicleCount: {
        type:String
    },
    zoneId: {
        type:String,
    },
    zoneName: {
        type:String
    },
    vendorCount: {type:String},
    fplList: {
        type:Array
    },
    userDTOs: {
        type:Array
    },
    type: {
        type:String
    },
    siteHierarchy: {type:Array},
    hierarchyList: {type:String}
})


const User=mongoose.model('userFirst',userSchema)
module.exports=User