const mongoose=require('mongoose')
const {model,Schema}=mongoose

const CategorySchema = new Schema({
  category_id: {
    type: Number,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
  category_name: {
    type: String,
    unique: true,
    required: true,
  },
  subcategories: {
    type: [String],
    required: true,
  },
});

module.exports = model('Cat', CategorySchema);