var friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {

    friends.friends.push(req.body);


    array = [];

    for (let i = 0; i < friends.friends.length - 1; i++) {
      for (j = 0; j < req.body.userInfo.scores.length; j++){
        var calc = (Math.abs(req.body.userInfo.scores[j] - friends.friends[i].scores[j]));
        array.push(calc);
      }
    };

    var calcArray = [], size = 10;

    while (array.length > 0) {
      calcArray.push(array.splice(0, size));
    };

    var friendValues = [];
    sum = 0;

      for (j = 0; j < calcArray.length; j++) {
        sum += parseInt(calcArray[j]);
        friendValues.push(sum);
      };

    //what value of calc array is the lowest?
  
    var friendIndex = friendValues.indexOf(Math.min(...friendValues), 0);
    var bestMatch = friends.friends[friendIndex];
    
    res.json(bestMatch);
  })
};
