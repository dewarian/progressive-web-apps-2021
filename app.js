import express from 'express';
// import path from 'path'
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', 'src/views')

// Custom path for static files
app.use('/static', express.static('src/static'))

app.get('/', (req, res) => {
  res.render('home', {
    title: 'home'
  })
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});