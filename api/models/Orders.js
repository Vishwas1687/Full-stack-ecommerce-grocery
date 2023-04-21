const mongoose=require('mongoose')
const {model,Schema}=mongoose
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

module.exports=model("Order",OrdersSchema);