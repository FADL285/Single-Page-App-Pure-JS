const express = require('express');
const path = require('path');

const app = express();

app.use('/assets', express.static(path.resolve('dist', 'assets')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(process.env.PORT || 7777, () => console.log('Server Running...'));
