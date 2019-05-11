const express = require('express');
const router = express.Router();
const fs = require('fs');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

router.get('/*', (req, res) => {
  const { path } = req;
  const file = fs.readFileSync(`${__dirname}/${path}/ok.json`, 'utf8');
  return res.send(JSON.parse(file));
});

router.post('/*', async (req, res) => {
  const { body } = req;
  await sleep(2000);
  return res.send(body);
});

module.exports = router;
