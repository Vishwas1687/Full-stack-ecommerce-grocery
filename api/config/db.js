import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to the Mongo DB database ${conn.connection.host}`.bgMagenta.white);
    } catch(error)
    {
        console.log(`Error in connecting to the database`.bgRed.white);
    }
}
export default connectDB;