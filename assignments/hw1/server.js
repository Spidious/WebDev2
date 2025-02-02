const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main'); // Add this line

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Create app variables
let messages = [];
let otherUsers = [];
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


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
