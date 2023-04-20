const express=require('express')

const router=express.Router()

router.get('/get-all-categories',(req,res)=>{
    res.send('All categories are fetched')
})


module.exports=router;