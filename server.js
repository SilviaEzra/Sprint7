const jsonServer = require('json-server');
const auth = require('json-server-auth');
const express = require('express');
const cors = require('cors');

const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const rules = auth.rewriter({
  users: 660,
  // Agrega otras reglas si es necesario
});

app.db = router.db;

app.use(cors());
app.use(middlewares);
app.use(rules);
app.use(auth);
app.use(router);

app.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
