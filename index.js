const express = require('express')  
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')))
//app.use('/about', express.static(path.join(__dirname, 'views')))




//http://127.0.0.1/about
app.post('/button', (req, res) => {
    console.log(req.body)
    res.send({
      "status": true
    }) //html css js
})

app.get('/esp32', (req,res) =>{
  res.send("hello esp32")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})