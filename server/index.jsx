import express from "express";
import yields from "express-yields";
import fs from "fs-extra";
import webpack from "webpack";

const port = process.env.PORT || 3000;
const app = express();

//start webpack
if (process.env.NODE_ENV === "development") {
  const config = require("../webpack.config.dev.babel").default;
  //compile config
  const compiler = webpack(config);

  //add dev-middleware
  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
    })
  );
  //add hot-reload middleware
  app.use(require("webpack-hot-middleware")(compiler));
}

app.get(["/"], function* (req, res) {
  let index = yield fs.readFile("./public/index.html", "utf-8");
  res.send(index);
});
app.listen(port, "0.0.0.0", () => console.log(`App listining at ${port}`));
