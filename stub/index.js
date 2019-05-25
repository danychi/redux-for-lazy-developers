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

router.post('/posts/:postId/comments', async (req, res) => {
  const { body } = req;
  return res.send(body);
});

router.post('/*', async (req, res) => {
  const { body } = req;
  await sleep(2000);
  return res.send(body);
});

router.put('/*', async (req, res) => {
  const { body } = req;
  return res.send(body);
});

router.delete('/*', async (req, res) => {
  const { params } = req;
  return res.send(params);
});

module.exports = router;
