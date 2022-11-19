let express = require("express");
let app = express();
app.use("/", express.static("public"));

/*-----HTTP Server------*/
let http = require("http");
let server = http.createServer(app);

//'port' variable allowd for deployment
let port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("Server listening at port: " + port);
});
