const express = require('express');

const app = express()

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let courses = [
  {
      id: "11",
      name: "Learn Swagger",
      price: 888
  },
  {
      id: "12",
      name: "Learn Smart Contract",
      price: 777
  },
  {
      id: "13",
      name: "Learn Web3.js",
      price: 222
  }
]
app.get('/', (req, res)=>{
  res.send("hello from lco");
})
app.get('/api/v1/lco', (req, res)=>{
  res.send("hello from lco");
})
app.get('/api/v1/lcoobject', (req, res)=>{
  res.send({id:11, name:"learn probackend", price:666});
})


app.listen(4000, ()=>console.log("Server is running at port 4000"))