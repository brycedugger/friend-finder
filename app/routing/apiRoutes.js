var friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends.friends);
  });

  app.post("/api/friends", function (req, res) {
    // console.log(req.body.userInfo);
    var userResponse = req.body
    // var userScore = req.body.scores
    res.json(userResponse);
    friends.friends.push(userResponse);

    calcArray = [];
// console.log('scores:',  friends.friends[0].scores.length);
// console.log('userResponse.scores', userResponse.scores)
    for (let i=0; i = friends.friends.length-1; i++) {
      for (let j = 0; j = userResponse.scores.length; j++){
        var calc = (Math.abs(userResponse.scores[j] - friends.friends.scores[j]));
        calcArray.push(calc);
      }
    }
    //what value of calc array is the lowest?

    var friendMatch = calcArray.indexOf(Math.min(calcArray), 0);

    friends.bestMatch.push(friends.friends[friendMatch]);
  })
};
