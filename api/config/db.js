const mongoose=require('mongoose')
const dotenv=require('dotenv')
const colors=require('colors')
dotenv.config()
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to the Mongo DB database ${conn.connection.host}`.bgMagenta.white);
    } catch(error)
    {
        console.log(`Error in connecting to the database`.bgRed.white);
    }
}
module.exports=connectDB;