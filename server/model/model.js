let birds = require('../birds.json');

async function getBirds(req, res) {
  const results = birds;
  res.status(200).send(results);
  return results;
}

async function deleteBird(req, res) {
  birds = birds.filter((birb) => birb.id === req.params.id);
  const results = birds;
  res.status(200).send(200).send(results);
}

module.exports = { getBirds, deleteBird };
