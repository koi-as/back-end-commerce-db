const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection.js')

const app = express();
const PORT = process.env.PORT || 9352;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {console.log(`App listening on port ${PORT}!`)})
})
