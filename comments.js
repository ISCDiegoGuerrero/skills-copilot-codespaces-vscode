// Create web server using express
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'FishBoi', comment: 'I like fish' },
  { username: 'PuppyLuv', comment: 'I like puppies' }
];

// Add static files
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');

// Create route for comments
app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});

// Listen to port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Path: comments.ejs
// Create web server using express
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'FishBoi', comment: 'I like fish' },
  { username: 'PuppyLuv', comment: 'I like puppies' }
];

// Add static files
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');

// Create route for comments
app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});

// Listen to port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Path: comments.ejs
<!DOCTYPE html>
<html>
<head>
  <title>Comments</title>
</head>
<body>
  <h1>Comments</h1>
  <ul>
    <% comments.forEach(function(comment) { %>
      <li><strong><%= comment.username %></strong>: <%= comment.comment %></li>
    <% }) %>
  </ul>
</body>
</html>