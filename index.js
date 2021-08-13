const path = require('path');
const express = require("express");
const cors=require("cors")
const bodyParser=require("body-parser")
const PORT =3001;

const app = express();
app.use(cors)
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get("/api", (req, res) => {
    res.send({ message: "Hello from server!" });
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});