// DEPENDENCIES

const express = require("express");

// tell node to use express
const app = express();

// which port to use
const PORT = process.env.PORT || 8080;

//  express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes placeholder
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
