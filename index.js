const express = require("express");
const app = express();
const env = require("./config/environment");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = env.PORT;

// const whitelist = ["http://localhost:8080", "http://localhost:4000"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const middleware = require("./middleware/authenticate.middleware");

app.use("/test", middleware, require("./controllers/test.controller"));
app.use("/auth", require("./controllers/auth.controller"));

app.listen(
  PORT,
  () => console.log(`Server is started at port ${PORT}`),
  console.log(`CORS-enabled web server listening on port ${PORT}`)
);
