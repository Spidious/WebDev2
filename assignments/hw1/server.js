
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";this is a test

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout'); // Add this line

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Create app variables
let messages = [];
let otherUsers = [];
let movies =[
    {
        title: 'A New Hope',
        stars: ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford'],
        director: 'George Lucas'
    }, 
    {
        title: 'The Empire Strikes Back',
        stars: ['Mark Hammil', 'Carrie Fischer', 'Harrison Ford'],
        director: 'George Lucas'
    }, 
];
const user = {pawprint: 'ltdckd', firstname: 'Luke', lastname: 'Deffenbaugh'};

// Create route for home
app.get('/', (req, res) => {
    res.render('home', { title: 'Home', messages, user });
});
// Route for handling form submissions
app.post('/home-submit', (req, res) => {
    const message = req.body.goal;
    messages.push(message);
    res.redirect('/');
});

// Create route for about
app.get('/about', (req, res) => {
    res.render('about', { title: 'About', otherUsers, user});
});
app.post('/about-submit', (req, res) => {
    const name = req.body.userName;
    const bio = req.body.userBio;
    otherUsers.push({name: name, bio: bio});
    res.redirect('/about');
})

// Create route for movies
app.get('/movies', (req, res) => {
    res.render('movies', { title: 'Movies', movies, user});
});
app.post('/movies-submit', (req, res) => {
    const title = req.body.title;
    const stars_raw = (req.body.stars).split(',');
    const director = req.body.director;

    let stars = [];
    stars_raw.forEach(function(star) {
        stars.push(star);
    });

    movies.push({title: title, stars: stars, director: director});
    res.redirect('/movies');
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
