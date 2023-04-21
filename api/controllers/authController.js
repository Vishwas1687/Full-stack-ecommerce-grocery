const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const UserModel = require('../models/Users');

const registerController = async (req, res) => {
  try {
    const {username, email, password, confirmPassword, address, phoneNumber, role ,answer} = req.body;
    if(!username)
    return res.send({message:'Username is not entered'})
    if(!email)
    return res.send({message:'Email is not entered'})
    if(!password)
    return res.send({message:'Password is not entered'})
    if(!confirmPassword)
    return res.send({message:'Password is not confirmed'})
    if(!address)
    return res.send({message:'Address is not entered'})
    if(!phoneNumber)
    return res.send({message:'Phone Number is not entered'})
    if(!answer)
    return res.send({message:"Enter your favourite food"})

    const existingUser=await UserModel.findOne({email:email})
    if(existingUser)
    {
        return res.status(201).send({
            success:"false",
            message:"User already exists"
        })
    }
    if(password!=confirmPassword)
    {
        return res.status(404).send({
            success:false,
            message:"Confirm the password"
        })
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Save the user to the database
    const newUser = await new UserModel({
    
      username: username,
      email: email,
      password: hashedPassword,
      address: address,
      phoneNumber: phoneNumber,
      role: role,
      answer:answer
    }).save();

    res.status(201).send({
      success: true,
      message: "Successfully registered",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(404).send({
      success: false,
      message: "Registration failed",
      error: error.message,
    });
  }
};

const loginController=async(req,res)=>{
   try{
   const {email,password}=req.body;
   if(!email)
   return res.send({message:'Email is not entered'})
   if(!password)
   return res.send({message:'Password is not entered'})
   const existingUser=await UserModel.findOne({email})
   if(!existingUser)
   {
    return res.send(404).send({
        message:"Email does not exist",
        success:false
    })
   }
   const match=await bcrypt.compare(password,existingUser.password)
   if(!match)
   {
    return res.status(404).send({
        success:false,
        message:"Wrong password"
    })
   }
   const token=jwt.sign({_id:existingUser._id},process.env.JWT_TOKEN,{expiresIn:'365d'})
   res.status(200).send({
    success:true,
    user:{
        username:existingUser.username,
        email:email,
        address:existingUser.address,
        phoneNumber:existingUser.phoneNumber,
        role:existingUser.role
    },
    token:token
   })
   }catch(error){
    res.status(404).send({
        message:"Something went wrong",
        success:true
    })
   }
}

const forgotPasswordController=async(req,res)=>{
    try{
      const {email,password,confirmPassword,answer}=req.body;
      if(!email)
      return res.send({message:'Email is required'})
      if(!password)
      return res.send({message:'Create a new password'})
      if(!confirmPassword)
      return res.send({message:'Confirm the password'})
      if(!answer)
      return res.send({message:'Answer is wrong'})
      
      const user=await UserModel.findOne({email})
      if(!user)
      {
        return res.status(404).send({
            message:"User is not registered",
            success:false
        })
      }
      if(user.answer!=answer)
      {
        return res.status(404).send({
            message:"Not a valid user",
            success:false,
        })
      }
      if(password!=confirmPassword)
      {
        return res.status(404).send({
            success:false,
            message:"Confirm the password"
        })
      }
      const hashedPassword=await bcrypt.hash(password,10);
      const updatedUser=await UserModel.findByIdAndUpdate(user._id,{password:hashedPassword})
      res.status(200).send({
        success:true,
        message:"Password is changed",
        user:{
            username:user.username,
            email:user.email,
            address:user.address,
            phoneNumber:user.phoneNumber,
            role:user.role,
            answer:user.answer
        }
      })
    }catch(error){
        res.status(404).send({
            message:"Something went wrong",
            success:true
        })
    }
}


const updateProfileController=async(req,res)=>{
  try{
    const {password,address,phoneNumber}=req.body
    if(!password)
    return res.send({message:'Enter the password'})
    if(!address)
    return res.send({message:'Enter the address'})
    if(!phoneNumber)
    return res.send({message:'Enter the phone number'})
    const existingUser=await UserModel.findById(req.user._id)
    const hashedPassword=await bcrypt.hash(password,10)
    const updatedUser=await UserModel.findByIdAndUpdate(existingUser._id,
      {password:hashedPassword, address:address, phoneNumber:phoneNumber,
    })

    res.status(200).send({
      message:'User profile updated successfully',
      success:true,
      updatedUser
    })
  } catch(error){
    res.status(404).send({
      message:'Something went wrong',
      success:false,
      error
    })
  }
}
module.exports = { registerController,loginController,
  forgotPasswordController,updateProfileController};