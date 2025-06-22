const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // serve static files from 'public' directory

app.get('/', (req, res) => {
  res.send('Welcome to Glitch Studio!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
