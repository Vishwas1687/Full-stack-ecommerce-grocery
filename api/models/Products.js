import mongoose from 'mongoose';
import * as mongooseSequence from 'mongoose-sequence';
import {model,Schema} from 'mongoose';
const sequenceSchema=mongooseSequence(mongoose);
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
ProductsSchema.plugins(sequenceSchema,{inc_field:'product_id'})
export default model("Product",ProductsSchema);