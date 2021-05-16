// const fs = require('fs');


// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../tours.js`));
const Tour = require('../models/tourModel')


exports.getAllTours = async (req,res)=>{
  try{
    const tours = await Tour.find();
  res.status(200).json({
    status:'success',
    result:tours.length,
    data:{
      tours
    }
  })
  }catch(err){
    res.status(204).json({
      message: 'invalid Post',
      data:{
        err
      }
    })
  }
  
}
exports.createTour = async (req,res)=>{
  try{
    const tour = await Tour.create(req.body);
    res.status(200).json({
    status:'success',
    data:{
      tour
    }
  })
  }catch(err){
    res.status(400).json({
      status:'fail',
      message: err
    })
  }
 
}

exports.getTour = async (req,res)=>{
 try{
    const tour = await Tour.findById(req.params.id)
  res.status(200).json({
    status:'success',
    data:{
      tour
    }
  })
 }catch(err){
   res.status(400).json({
     status: 'failed',
     message: err
   })
 }
}
exports.updateTour = async (req,res)=>{
try{
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
    runValidators: true
  })
  res.status(200).json({
    status: 'success',
    data:{
      tour
    }
  })
}catch(err){
  res.status(400).json({
    status: 'failed',
    message: err
  })
}
}

exports.deleteTour = async (req,res)=>{
  try{
    await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: 'Tour successfully deleted'
    })
  }catch(err){
    res.status(400).json({
      message: err
    })
  }
  
}
