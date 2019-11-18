const express = require("express");
const path = require("path");
//using the variable app instead of the function express()
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing (needed to process POST request)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./app/routing/htmlRoutes"));
app.use("/api", require("./app/routing/apiRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));