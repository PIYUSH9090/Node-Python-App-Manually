const express = require('express');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //Appending .jpg
  }
})

var upload = multer({ storage: storage }).single('photo');
// const upload = multer({dest: __dirname + '/uploads/images'}).single('photo');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.post("/upload", (req, res) => {
   upload(req, res, (err) => {
    if(err) {
      res.status(400).send("Something went wrong!");
    }
    res.send(req.file);
  });
});
app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});