const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data

//THIS HAS TO BE CALLED BEFORE THE ROUTES
app.use(express.static("public"));
app.use(express.json());


app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// making public folder static assets so we don't need to have a specific endpoint for them

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
