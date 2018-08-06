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
  console.log('hi nenu vachesa');
  const {data} = req.query;
  const results = '';
 ()=>{
   fetch(`https://www.google.com/search?q={data}`)
  .then(response => console.log(response))
console.log('dont know');
};
  res.send(results);
})