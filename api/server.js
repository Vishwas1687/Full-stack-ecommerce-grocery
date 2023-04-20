import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
const app=express()

dotenv.config();

//database config
connectDB();

//middlewares
app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send("<h1>Ecommerce</h1>")
})
const PORT=process.env.PORT||5000;
const development=process.env.DEV_MODE;
app.listen(PORT,()=>{
    console.log(`Server running on ${development} mode on port ${PORT}`.bgCyan.white);
})















//username: gpvishwas1687
//password: 3iGRmiJypNaMYxXD
//mongodb+srv://gpvishwas1687:3iGRmiJypNaMYxXD@ecommercegrocerymernsta.atmnrns.mongodb.net/test