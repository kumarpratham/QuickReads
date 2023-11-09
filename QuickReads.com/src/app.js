// const express = require("express");
// const app = express();
// const hbs = require("hbs");
// // const mongoose = require("mongoose");
// const newsR = require("./routes/newsR");
// // const weatherR = require("./routes/weatherR")
// const port = 3400;


// //template engine
// app.set("view engine", "hbs");
// app.set("views", "views");
// hbs.registerPartials("views/partials");
// const moment = require('moment'); // Make sure you have installed the "moment" package

// // Define the "formatDate" helper
// hbs.registerHelper('formatDate', function(date) {
//   // You can use the "moment" library to format the date as desired
//   // For example, if you want the date in a specific format:
//   return moment(date).format('YYYY-MM-DD HH:mm:ss');
// });


// app.use("/static", express.static("public"));
// // app.use('/fliter/static/css', express.static('path/to/your/css/files', { type: 'text/css' }));
// app.use('/fliter/static/css', express.static('public', { type: 'text/css' }));


// app.use("/", newsR);
// // app.use("/w", weatherR);


// // server setup
// app.listen(port, ()=> {
//     console.log(`server is started at http://localhost:${port}`);
// });


const express = require("express");
const app = express();
const hbs = require("hbs");
const newsR = require("./routes/newsR");
const port = 3400;

// Template engine setup
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// Helper for formatting dates using the "moment" library
const moment = require('moment');
hbs.registerHelper('formatDate', function(date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
});

// Serve static files from the "public" directory
app.use("/static", express.static("public"));

// Use the "newsR" route to handle news-related requests
app.use("/", newsR);

// Start the server
app.listen(port, () => {
  console.log(`Server is started at http://localhost:${port}`);
});
