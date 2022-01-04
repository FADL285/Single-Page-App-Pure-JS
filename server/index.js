const express = require('express');
const path = require('path');

const app = express();

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(process.env.PORT || 7777, () => console.log('Server Running...'));
