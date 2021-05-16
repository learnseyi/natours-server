const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path: './config.env'})
const Tour = require('./models/tourModel')
const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DB_PASS)

mongoose.connect(DB,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(()=>console.log('connection succesful'))


// read json file
const data = JSON.parse(fs.readFileSync(__dirname+'/tours.js','utf-8'));

// delete test data in database
const deleteData = async ()=>{
  try{
    await Tour.deleteMany()
    console.log('data successfully deleted')
    process.exit()
    
  }catch(err){
    console.log(err)
  }
  
}

const importData = async ()=>{
  try{
    await Tour.create(data)
    console.log('data successfully created')
    process.exit()
  }catch(err){
    console.log(err)
  }
}

if(process.argv[2] === '--import'){
  importData()
}else if(process.argv[2] === '--delete'){
  deleteData()
}

