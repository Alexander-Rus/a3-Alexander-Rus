
var router = require('express').Router();
var path = require('path');
var authorize = require('./authorize');
var passport = require('passport');
authorize.configurePassport(passport)
var lowDB = require('lowdb');

var uuid = require('uuid');

var db = lowDB(path.join('data', 'db.json'));

router.get('/', function(req, res) {
  res.render('home')
})

router.get('/songs', function(req, res) {
  var songs = db.get('songs').value()
  var authors = db.get('authors').value()

  res.render('songs', { songs: songs, authors: authors })
})

router.post('/createSong', function(req, res) {
  var title = req.body.title;
  var author_id = req.body.author_id;

  db.get('songs')
    .push({title: title, id: uuid(), author_id: author_id})
    .write()

  db.get('authors')
    .push({author_id: author_id})
    .write()  

  res.redirect('/songs')
})

router.post('/I_am_trying', function(req, res) {
  // get data from form
  var title = req.body.title;
  console.log("***", title)

  db.get('songs')
  .remove({title: title})
  .write()

  res.render("home")

})

router.post('/I_cry_tears_of_pain', function(req, res) {
  // get data from form
  var title = req.body.title;
  var new_title = req.body.new_song;
  var new_artist = req.body.new_artist;
  console.log("***", title)
  console.log("$$$$", new_title)
  console.log("####", new_artist)

  db.get('songs')
  .find({title: title})
  .assign({title: new_title, author_id: new_artist})
  .write()

  res.render("home")

})

router.get('/songs/:id', function(req, res) {
  var song = db.get('songs').find({ id: req.params.id }).value()
  console.log(song)
  var author;
  if(song) {
    author = db.get('authors').find({ id: song.author_id }).value()
  }
  res.render('song', { song: song || {}, author: author || {}})
})

var createAccount = path.join('authorize', 'signup');
var login_view_path = path.join('authorize', 'login');

router.get('/signup', LoggedOut(), function(req, res) {
  res.render(createAccount)
})

router.post('/signup', function(req, res) {
  var username = req.body.username.trim();
  var password = req.body.password.trim();
  var password2 = req.body.password2.trim();

  req.checkBody('username', 'Username must have at least 4 characters').isLength({min: 3});
  req.checkBody('password', 'Password must have at least 4 characters').isLength({min: 3});
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Confirm password is required').notEmpty();
  req.checkBody('password', 'Password do not match').equals(password2);

  var errs = req.validationErrors();
  if (errs) {
    return res.render(createAccount, {errors: errs.map(function(error) {return error.msg})})
  }

  var settings = {
    username: username,
    password: password,
    successRedirectUrl: '/',
    signUpTemplate: createAccount,
  }
  authorize.signup(settings,res);
})
router.get('/login', LoggedOut(), function(req, res) {
  res.render(login_view_path, {
     errors: [] 
    })
})
router.post(
  '/login', passport.authenticate(
    'local',
    { successRedirect:'/',
      failureRedirect:'/login',
      failureFlash: true,
      successFlash: 'Logged In',
    }
  ),
)
router.get('/logout', function(req, res) {
  req.logout();
  req.flash('success', 'Logged Out');
  res.redirect('/')
})

router.get('/profile', LoginIn(), function(req, res) {
  var user =  db.get('users').find({ id: req.user.id }).value();

  res.render('profile', { dbUser:  user })
})

function LoginIn () {
	return (req, res, next) => {
    if (req.isAuthenticated()) { return next() };
    return res.redirect('/login')
	}
}

function LoggedOut () {
	return (req, res, next) => {
    if (!req.isAuthenticated()) { return next() };
    return res.redirect('/')
	}
}
module.exports = router;
