const fs = require('fs');


const tours = JSON.parse(fs.readFileSync(`${__dirname}/../tours.js`));


exports.getAllTours = (req,res)=>{
  res.status(200).json({
    status:'success',
    result:tours.length,
    data:{
      tours
    }
  })
}
exports.postTour = (req,res)=>{
  console.log(req.body,req.ip)
  res.send('request received');
}

exports.getTour = (req,res)=>{
  const id = req.params.id * 1
  const tour = tours.find((t)=>t.id === id)
  res.status(200).json({
    status:'success',
    data:{
      tour
    }
  })
}
exports.updateTour = (req,res)=>{
  res.status(500).json({
    status: 'error',
    data: 'route not yet defined'
  })
}

exports.deleteTour = (req,res)=>{
  res.status(204).json(null)
}
