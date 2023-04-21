const mongoose=require('mongoose')
const {model,Schema}=mongoose
const ProductsSchema=new Schema({
    products_id:{
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
        type:mongoose.ObjectId,
        required:true
    },
    photo:{
        type:Buffer,
        contentType:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    }
    
   
},{timestamps:true})
module.exports=model("Product",ProductsSchema);