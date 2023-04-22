const ProductModel=require('../models/Products')
const slugify=require('slugify')
const CategoryModel=require('../models/Category')

const createProductController=async(req,res)=>{
   try{
     const {product_id,product_name,mrp,sp,category,quantity}=req.body
     if(!product_id)
     return res.send({message:'Enter the product id'})
     if(!product_name)
     return res.send({message:'Enter the product name'})
     if(!mrp)
     return res.send({message:'Enter the mrp'})
     if(!sp)
     return res.send({message:'Enter the sp'})
     if(!category)
     return res.send({message:'Enter the category id'})
     if(!quantity)
     return res.send({message:'Enter the quantity'})

     const existingProduct=await ProductModel.findOne({product_id})
     if(existingProduct)
     {
        return res.status(404).send({
            message:'Product already exists',
            success:false
        })
     }
     
     const newProduct=new ProductModel({
        product_id:product_id,
        product_name:product_name,
        slug:slugify(product_name),
        mrp:mrp,
        sp:sp,
        category:category,
        quantity:quantity
     })
     await newProduct.save()

    res.status(200).send({
        message:'Product is created successfully',
        success:true,
        newProduct
    })
   } catch(error)
   {
        console.log(error)
        res.status(404).send({
            message:'Something is wrong',
            success:false,
            error:error.message
        })
   }
}


const updateProductController=async(req,res)=>{
   try{
     const {product_id,product_name,mrp,sp,category,quantity}=req.body
     const {slug}=req.params
     if(!product_id)
     return res.send({message:'Enter the product id'})
     if(!product_name)
     return res.send({message:'Enter the product name'})
     if(!mrp)
     return res.send({message:'Enter the mrp'})
     if(!sp)
     return res.send({message:'Enter the sp'})
     if(!category)
     return res.send({message:'Enter the category id'})
     if(!quantity)
     return res.send({message:'Enter the quantity'})
     
     const existingProduct=await ProductModel.findOne({slug})
     const updatedProduct=await ProductModel.findByIdAndUpdate(existingProduct._id,{
        product_id:product_id,
        product_name:product_name,
        slug:slugify(product_name),
        mrp:mrp,
        sp:sp,
        category:category,
        quantity:quantity
     },{new:true})

    res.status(200).send({
        message:'Product is created successfully',
        success:true,
        updatedProduct
    })

   } catch(error)
   {
        console.log(error)
        res.status(404).send({
            message:'Something is wrong',
            success:false,
            error:error.message
        })
   }
}

const deleteProductController=async(req,res)=>{
    try{
         const {slug}=req.params
         const existingProduct=await ProductModel.findOne({slug})
         await ProductModel.findByIdAndDelete(existingProduct._id)
         res.send({
            message:'Product successfully deleted',
            success:true
         })
    }catch(error)
    {
         res.send({
            message:'Something went wrong',
            success:false,
            error:error.message
         })
    }
}

const getSingleProductController=async(req,res)=>{
    try{
        const {slug}=req.params
        const existingProduct=await ProductModel.findOne({slug}).populate('category')
        if(!existingProduct)
        {
            return res.status.send({
                message:'Product cannot be fetched',
                success:false,
                error:error.message
            })
        }
         res.status(200).send({
            message:'Product is fetched',
            success:true,
            existingProduct
         })

    }catch(error)
    {
       res.status.send({
        message:'Something went wrong',
        success:false,
        error:error.message
       })
    }
}

const getAllProductsController=async(req,res)=>{
    try{
        const products=await ProductModel.find({})
        res.status(200).send({
            message:'All products are fetched',
            success:true,
            products
        })
    }catch(error){
          res.status(404).send({
            message:'Something went wrong',
            success:false
          })
    }
}
module.exports={createProductController,updateProductController,
           deleteProductController,getSingleProductController,
        getAllProductsController}