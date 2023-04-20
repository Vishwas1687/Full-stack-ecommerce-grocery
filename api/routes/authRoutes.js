const express=require('express')
const UserModel=require('../models/Users')
const {registerController,loginController,forgotPasswordController}=require('../controllers/authController')
const router=express.Router()

router.post('/login',loginController)

router.post('/register',registerController)

router.post('/forgot-password',forgotPasswordController)


// router.put('/update-profile',(req,res)=>{
//     res.send('Update your profile')
// })

// router.get('/get-all-orders',(req,res)=>{
//     res.send('To get all orders you should be and admin and sign in')
// })
// router.get('/order-status',(req,res)=>{
//     res.send('Only an admin can change the status of the order')
// })

module.exports=router;