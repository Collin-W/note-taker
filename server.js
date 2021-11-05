const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/noteApiRoutes');
const htmlRoutes = require('./routes/noteHtmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}!`);
})


// const express = require('express')
// const app = express()

// app.use(logger)

// //http://localhost:3000
// //= /
// app.listen(3000)

// //setting up routes 
// const newnotesRouter = require('./routes/newnotes')
// app.use('/newnotes', newnotesRouter)



// function logger(req, res, next) {
//     console.log(req.originalUrl)
//     next()

// }