const mongoose=require('mongoose')
const categoryModel=require('./CatWithSubCat')
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
    subcategory:{
        type:String,
        required:true,
        validate:{
           validator:async function(v){
            const category=await categoryModel.findById(this.category)
            return category.subcategories.includes(v)
           },
           message:props=>`${props.value} is not a valid subcategory of the category`
        }
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
module.exports=model("Pro",ProductsSchema);