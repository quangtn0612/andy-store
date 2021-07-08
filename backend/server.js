const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//App config
const app = express();
const port = process.env.PORT || 8001;
const uri = process.env.ATLAS_URI;

//Middlewares
app.use(cors());
app.use(express.json());

//DB config
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Mongodb database connection established successfully!!");
})

const walletsRouter = require('./routes/wallets');
const passportsRouter = require('./routes/passports');
const charmsRouter = require('./routes/charms');

//API endpoints
app.get("/",(req,res)=>res.status(200).send("HELLO WORLD!"));
app.use("/wallets", walletsRouter);
app.use("/passports", passportsRouter);
app.use("/charms", charmsRouter);

//Listener
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})
