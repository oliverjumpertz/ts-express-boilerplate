import express from 'express';

const app = express();
const port = +(process.env.PORT ?? 8080);

app.get('/', async (req, res) => {
  const name = req.query['name'] ?? 'World';

  const response = {
    title: `Hallo ${name}`,
    message: 'Hey, this is my first REST endpoint with express!',
  };

  res.send(response);
});

app.listen(port, async () => {
  console.log(`server started at http://localhost:${port}`);
});
