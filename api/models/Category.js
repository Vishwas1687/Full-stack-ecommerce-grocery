const mongoose=require('mongoose')
const {model,Schema}=mongoose
const CategorySchema=new Schema({
    category_id:{
        type:Number,
        unique:true
    },
    slug:{
        type:String,
        lowercase:true
    },
    category_name:{
        type:String,
        unique:true,
        required:true
    }
    // photo:{
    //     data:Buffer,
    //     contentType:String
    // }
})

module.exports=model("Category",CategorySchema);