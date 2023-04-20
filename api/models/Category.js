import mongoose from 'mongoose';
import * as mongooseSequence from 'mongoose-sequence';
import {model,Schema} from 'mongoose';
const sequenceSchema=mongooseSequence(mongoose);
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
    },
    photo:{
        data:Buffer,
        contentType:String,
        required:true
    }
})
CategorySchema.plugins(sequenceSchema,{inc_field:'category_id'})
export default model("Category",CategorySchema);