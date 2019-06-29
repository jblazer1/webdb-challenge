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

// POST ==================== POST ======================== POST ========================= POST =============== POST
server.post("/api/projects", async (req, res) => {
  try {
    const [id] = await db("project").insert(req.body);

    const project = await db("project")
      .where({ id })
      .first();

    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was an error", error });
  }
});

server.post("/api/actions", async (req, res) => {
  try {
    const [id] = await db("action").insert(req.body);

    const action = await db("action")
      .where({ id })
      .first();

    res.status(201).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was an error", error });
  }
});

// GET ================== GET ======================= GET ============================ GET ================= GET
server.get("/api/projects", async (req, res) => {
  try {
    const projects = await db("project");
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

server.get("/api/projects/:id", async (req, res) => {
  try {
    const projects = await db("project")
      .where({ id: req.params.id })
      .first();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

server.get("/api/actions", async (req, res) => {
  try {
    const actions = await db("action");
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** API running on http://localhost:${port} *** \n`);
});
