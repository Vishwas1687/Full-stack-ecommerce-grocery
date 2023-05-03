// const CategoryModel=require('../models/Category')
// const categoryModel=require('../models/CatWithSubCat')
// const slugify=require('slugify')
// const fs=require('fs')
// const createCategoryController=async(req,res)=>{
//    try{
//      const {category_id,category_name}=req.body
//     //  const {photo}=req.files
//      if(!category_id)
//      return res.send({message:'Enter category id'})
//      if(!category_name)
//      return res.send({message:'Enter category id'})
//     //  if(!photo)
//     //  return res.send({message:'Enter category id'})

//      const existingCategory=await CategoryModel.findOne({category_id})
//      if(existingCategory)
//      {
//         return res.status(404).send({
//             message:'Category already exists',
//             success:false
//         })
//      }

//      const newCategory=await new CategoryModel({
//         category_id:category_id,
//         slug:slugify(category_name),
//         category_name:category_name    
//      }).save()
     
//     //  newCategory.photo.data=fs.readFileSync(photo.path)
//     //  newCategory.photo.contentType=photo.type


//      res.status(200).send({
//         message:'Category successfully added',
//         success:true,
//         newCategory
//      })
//    }
//    catch(error){
//      res.status(404).send({
//         message:'Something went wrong',
//         success:false
//      })
//    }
// }

// const updateCategoryController=async(req,res)=>{
//     try{
//      const {slug}=req.params
//      const {name}=req.body
//     //  const {photo}=req.files
//      if(!name)
//      return res.send({message:'Enter category name'})
//     //  if(!photo)
//     //  return res.send({message:'Enter category id'})
//     const existingCategory=await CategoryModel.findOne({slug:slug})
//     if(!existingCategory)
//     {
//         return res.status(404).send({
//             message:'Category Id does not exist',
//             success:false
//         })
//     }
//      const updatedCategory=await CategoryModel.findByIdAndUpdate(existingCategory._id,{
//         category_id:existingCategory.category_id,
//         slug:slugify(name),
//         category_name:name   
//      },{new:true})
//      await updatedCategory.save()
     
//     //  newCategory.photo.data=fs.readFileSync(photo.path)
//     //  newCategory.photo.contentType=photo.type

//      res.status(200).send({
//         message:'Category successfully updated',
//         success:true,
//         updatedCategory
//      })
//    }
//    catch(error){
//      res.status(404).send({
//         message:'Something went wrong',
//         success:false,
//         error
//      })
//    }
// }

// const getAllCategoryController=async(req,res)=>{
//      try{
//          const allCategories=await CategoryModel.find({})
//          res.status(200).send({
//             message:'All categories are fetched',
//             success:true,
//             allCategories
//          })
//      }catch(error)
//      {
//         res.status(404).send({
//          message:'Something went wrong',
//          success:false
//         })
//      }
// }

// const deleteCategoryController=async(req,res)=>{
//     try{
//       const {slug}=req.params;
//       const existingcategory=await CategoryModel.findOne({slug})
//       await CategoryModel.findByIdAndDelete(existingcategory._id)
//       res.status(200).send({
//          message:'Category successfully deleted',
//          success:true
//       })
//     } catch(error){
//       res.status(404).send({
//           message:'Something went wrong',
//           success:false,
//           error
//       })
//     }
// }

// const createCatController=async(req,res)=>{
//      try{
//          const {category_id,category_name,subcategories}=req.body
//          if(!category_id)
//          return res.send({message:'Enter the category id'})
//          if(!category_name)
//          return res.send({message:'Enter the category name'})
//          if(!subcategories)
//          return res.send({message:'Enter the subcategories'})

//          const existingCategory=await categoryModel.findOne({category_id})
//          if(existingCategory)
//          {
//             return res.status(404).send(
//                {message:'Category already exists',
//                  success:false})
//          }
//          const createCategory=await new categoryModel({
//             category_id:category_id,
//             slug:slugify(category_name),
//             category_name:category_name,
//             subcategories:subcategories
//          }).save()

//          res.status(200).send({
//             message:'Successfully added the category',
//             success:true,
//             createCategory
//          })
//      }catch(error){
//          res.status(404).send({
//             message:'Something went wrong',
//             success:false,
//             error:error.message
//          })
//      }
// }

// module.exports={createCategoryController,updateCategoryController,
//    getAllCategoryController,deleteCategoryController
//    ,createCatController}