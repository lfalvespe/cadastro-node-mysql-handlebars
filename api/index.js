const express = require("express");
const exphbs = require("express-handlebars");

const conn = require("./db/conn");
const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const path = require("path");

const port = 3000;

const app = express();

app.use(express.static(__dirname + "/public"));

app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//routes
app.use("/", mainRoutes);
app.use("/users", userRoutes);

conn
  .sync()
  .then(() => {
    app.listen(port, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("App rodando na porta", port);
    });
  })
  .catch((err) => console.log(err));

  
module.exports = app;
