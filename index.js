const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

// test
server.get("/", (req, res) => {
  res.send(`<h1>I will be amazed if this works</h1>`);
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** API running on http://localhost:${port} *** \n`);
});
