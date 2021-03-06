const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/noteApiRoutes');
const htmlRoutes = require('./routes/noteHtmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Use apiRoutes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}!`);
})

