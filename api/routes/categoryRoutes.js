const express=require('express')
const formidable=require('formidable')
const {requiresSignIn,isAdmin}=require('../middlewares/authmiddleware')

const {createCategoryController,
    updateCategoryController,
    getAllCategoryController,deleteCategoryController,
     getPhotoController}=require('../controllers/categoryController')

const router=express.Router()

router.post('/create-category',requiresSignIn,isAdmin,createCategoryController)

router.put('/update-category/:slug',requiresSignIn,isAdmin,updateCategoryController)

router.get('/get-all-categories',getAllCategoryController)

router.delete('/delete-category/:slug',requiresSignIn,isAdmin,deleteCategoryController)

// router.get('/photo-category',getPhotoController)


module.exports=router;