var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5050;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("/routing/apiRoutes.js")(app);
// require("/routing/htmlRoutes.js")(app);

var friendArray = [
  {
    name: "Clay",
    photo: "www.photo.com",
    scores: ["1", "4", "1", "4", "1", "1", "1", "4", "1", "1"]
  },
  {
    name: "Brian",
    photo: "www.photo.com",
    scores: ["2", "4", "1", "4", "3", "1", "1", "4", "5", "5"]
  },
  {
    name: "Karen",
    photo: "www.photo.com",
    scores: ["3", "1", "3", "1", "3", "1", "3", "4", "5", "5"]
  },
  {
    name: "Sam",
    photo: "www.photo.com",
    scores: ["2", "3", "4", "5", "4", "5", "3", "1", "5", "1"]
  },
  {
    name: "John",
    photo: "www.photo.com",
    scores: ["1", "2", "2", "5", "2", "2", "2", "2", "1", "1"]
  },
  {
    name: "Caroline",
    photo: "www.photo.com",
    scores: ["5", "5", "4", "4", "4", "4", "4", "4", "4", "4"]
  }
];

app.get("/api/friends", function(req, res) {
  return res.json(friendArray);
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// If no matching route is found default to home
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newFriend = req.body;
  friendArray.push(newFriend);

  console.log(newFriend);

  // We then display the JSON to the users
  res.json(newFriend);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
