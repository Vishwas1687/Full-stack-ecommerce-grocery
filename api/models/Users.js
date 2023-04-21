const mongoose=require('mongoose')
const {model,Schema}=mongoose;
const UserSchema =new Schema({
   
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    role:{
        type:Number
     
    },
    answer:{
        type:String,
        required:true
    }
},
{timestamps:true})

module.exports=model('User',UserSchema);

// {
//   "username":"dsoiug",
//   "email":"d@gmail.com",
//   "password":"d",
//   "confirmPassword":"d",
//   "address":"mdfiuh",
//   "phoneNumber":"08032",
//    "role":0,
//    "answer":"jilebi"
// }



// {
//     "email":"d@gmail.com",
//     "password":"d"
// }

// {
//   "email":"d@gmail.com",
//   "password":"f",
//   "confirmPassword":"f",
//   "answer":"jilebi"
// }


// {
//     "email":"a@gmail.com",
//      "password":"vishwas",
//     "address":"20,istmainroad",
//     "phoneNumber":"803280324"
// }