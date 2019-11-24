var friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {

    var userResponse = req.body
    var userScore = req.body.scores

    friends.push(userResponse);

    calcArray = [];

    for (i=0; i = friends.length-1; i++) {
      for (i = 0; i = userScore.length; i++){
        var calc = (Math.abs(userScore[i] - friends.score [i]));
        return calc;
      }
    calcArray.push(calc);
    }
    //what value of calc array is the lowest?

    var friendMatch = calcArray.indexOf(Math.min(calcArray), 0);

    bestMatch.push(friends[friendMatch]);
  })
};
