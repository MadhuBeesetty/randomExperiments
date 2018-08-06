const express = require('express');

const app = express();

const cors = require('cors');
app.listen(3655);
//app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

//google JSON = AIzaSyDPlDFITPKG8s9aN0z7vEJpBucSYYl4R9A; 
app.get('/search',(req,res)=>{
  console.log('i am here');
  const {q} = req.query;
  console.log(q);
  const results = '';
 
  res.send(results);
})