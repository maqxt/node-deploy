const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express()
//const models = require('./models/index');





// Decode json and x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Add a bit of logging
app.use(morgan('short'))

// Get all the users defined
/*app.get('/', function (req, res) {
  models.User.findAll()
    .then((users) => {
      res.json(users)
    })
})*/

// Add a new user to the database
/*app.post('/', function(req, res) {
  models.User.create({
    username: req.body.username
  })
    .then(() => {
      res.send('User added !')
    })
})*/

/*app.get('/grimlins', function (req, res) {
  models.Grimlins.findAll()
    .then((Grimlins) => {
      res.json(Grimlins)
    })
})*/

/*app.post('/grimlins', function(req, res) {
	models.Grimlins.create({
	username: req.body.user
  })
    .then(() => {
      res.send('Un Grimlins a été ajouté !')
    })
})*/

/*app.delete('/grimlins', function(req, res) {
	models.Grimlins.destroy
	res.send('Un Grimlins a été supprimé !')
	
});*/


//frtdyrt






// Synchronize models
/*models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   * 
   * Listen only when database connection is sucessfull
   */
  app.listen(process.ev.PORT, function() {
    console.log('Express server listening on port 3000');
  });
});
