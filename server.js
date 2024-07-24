const https = require('https');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/cnpj/:cnpj', (req, res) => {
  const cnpj = req.params.cnpj;
  const options = {
    method: 'GET',
    hostname: 'receitaws.com.br',
    port: null,
    path: `/v1/cnpj/${cnpj}`,
    headers: {
      Accept: 'application/json'
    }
  };

  const apiReq = https.request(options, (apiRes) => {
    const chunks = [];

    apiRes.on('data', (chunk) => {
      chunks.push(chunk);
    });

    apiRes.on('end', () => {
      const body = Buffer.concat(chunks);
      res.json(JSON.parse(body.toString()));
    });
  });

  apiReq.on('error', (e) => {
    res.status(500).send(e.message);
  });

  apiReq.end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
