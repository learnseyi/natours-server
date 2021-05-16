const mongoose = require('mongoose')
const app = require('./index');
const dotenv = require('dotenv');
const port = 3000;


dotenv.config({path: './config.env'})
const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DB_PASS)


mongoose.connect(DB,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(()=>console.log('connection to database successful'))


app.listen(port,()=>{
  console.log(`server running on port ${port}...`)
})