const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/posts', (req, res) => {
  const { path } = req;
  const file = fs.readFileSync(`${__dirname}/${path}/ok.json`, 'utf8');
  return res.send(JSON.parse(file));
});

module.exports = router;
