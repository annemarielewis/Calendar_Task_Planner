//purpose = make all of the info on our backend able to be easily processed/read by the front end/client side
//we will need express for this!

//We will want endpoints that have index and show routes for all three collections

const express = require("express");
const db = require("./db");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// require() imports here:
const { Task } = require("./models");
// const { User } = require("./models");
// const { Partner } = require("./models");

const PORT = process.env.PORT || 3001;

const app = express();

//middleware:
app.use(logger("dev")); //morgan (logger) prints our requests in terminal)
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
//middleware here ^//

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
