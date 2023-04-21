const mongoose=require('mongoose')
const {model,Schema}=mongoose
const  FeedbackSchema =new Schema({
    username:{
        type:mongoose.objectId,
        ref:'User'
    },
    feedback_phone_no:{
        type:mongoose.objectId,
        ref:'User'
    },
    product_pricing:{
        type:Number
    },
    delivery_service:{
        type:Number
    },
    ordering_process:{
        type:Number
    },
    website_experience:{
        type:Number
    },
    suggestions:{
        type:String
    }
},
{timestamps:true}
)
module.exports=model('Feedback',FeedbackSchema);