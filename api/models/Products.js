const mongoose=require('mongoose')
const {model,Schema}=mongoose
const ProductsSchema=new Schema({
    product_id:{
        type:Number,
        unique:true
    },
    product_name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        lowercase:true
    },
    mrp:{
        type:Number,
        required:true
    },
    sp:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.ObjectId,
        ref:"Category",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    // photo:{
    //     type:Buffer,
    //     contentType:String,
    //     required:true
    // },
   
},{timestamps:true})
module.exports=model("Product",ProductsSchema);