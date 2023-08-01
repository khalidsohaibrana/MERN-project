const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const { json } = require('stream/consumers');

app.use(cors());




// app.get('/message', (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.send('Hello from Node');
// });

// -------- This code is reading json file --------

const filePath = '/Users/khalidsohaib/Projects/MERN-project/server/src/NFTs.json';
app.get('/data', (req, res) => {

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read JSON file.' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to parse JSON file.' });
    }
  });
});




app.post('/data',(req,res)=>{

  fs.readFile(filePath, (err,data)=>{

    if(err){
      console.error(err)
      res.status(500).json({error:'Faild to read Json file.'});
    }

    try {
      const JsonData= JSON.parse(data);
      const newData= req.body;

      // Add the new data to the jsonData object
      JsonData.push(newData);

      // Write the updated jsonData back to the file
      fs.writeFile('/Users/khalidsohaib/Projects/MERN-project/server/src/NFTs.json', JSON.stringify(JsonData),'utf8', (err)=>{
        if(err)
        console.error(err)
        res.status(500).json({error:'Faild to write Json file'})
      })
      return res.json({message:"data added successfully"})

    } catch (error) {
      
    }
  })

})




app.listen(3200, () => {
  console.log('Server is listening on port 3200');
});





