const express = require("express");
const app = express();
const router = express.Router();
const path = require('path');
const axios = require('axios');


app.use('/', router);
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules"));

router.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname+'\\public\\index.html'));
});

router.get('/publicaciones', async (req, res) =>{

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      return null;
    }, 10000);
  });

  try{
    const accountId = "";
    const locationId = "";
    const reviews =
    axios.get(`https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews/`)

    const result = await Promise.race([reviews, timeoutPromise]);
    console.log("Try:" + result);
   res.json(reviews);

  }

    catch(e){
      console.log(e)
      res.status(200).json(null)
      console.log("catch null");
    }


});

app.listen(3000);