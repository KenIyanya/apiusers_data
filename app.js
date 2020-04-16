const express = require('express');
const users = require('./users_data');

const app = express();

app.get('/', (req, res) => {
  res.send(users);
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));