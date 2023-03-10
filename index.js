const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

/***** MIDDLEWARE *****/
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

/***** ROUTES *****/
app.use('/users', routes.User);

/***** SERVER *****/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})