import mongoose from 'mongoose';
import * as mongooseSequence from 'mongoose-sequence';
import {model,Schema} from 'mongoose';
const sequenceSchema=mongooseSequence(mongoose);
const OrdersSchema=new Schema({
    order_id:{
        type:Number,
        unique:true
    },
    products:[
        {
            type:mongoose.ObjectId,
            ref:'Products'
        }
    ],
    buyer_id:{
        type:mongoose.objectId,
        ref:'User'
    },
    payment:{
        type:Number,
        default:0,
        required:true
    },
    buyer:{
        type:mongoose.ObjectId,
        ref:'User'
    },
    order_key:{
        type:Number,
        required:true
    },
    address:{
        type:mongoose.ObjectId,
        ref:'User'
    },
     total_amount:{
        type:Number,
        required:true
     },
    status:{
        type:String,
        default:"Not process",
        enum:["Not process","Processing","Shipping","Location Reached","Delivered","Cancelled"]
    }
},{timestamps:true})
OrdersSchema.plugins(sequenceSchema,{inc_field:'order_id'})
export default model("Order",OrdersSchema);