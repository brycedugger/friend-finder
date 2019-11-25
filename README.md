# Friend Finder

Friend Finder is an express server, node application that asks the user to answer questions about themselves to find a friend. 

The user is asked to fill out a survey of questions to determine what kind of person they are. Taking the results of each answer, the values
are posted to the server and runs an algorithm against all potential friends that already in the server's database. The potential friend with 
the greatest similarities to the user will be pulled from the server and displayed to the user using a get request. In the process, the user
will have created a profile and added to the database.


## Usage: 

Download or clone the repository.

Run
    npm install

Go to localhost:/5000 in your browser.

Start the survey.

Answer the questions to determine who your new friend is.

## Demo:

View the live demo hosted on heroku [here.](https://friend-finder-bmd.herokuapp.com/)

## Built With:

* node.js
* express.js
* path.js
* ajax