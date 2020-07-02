import express, { response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello GoStack' });
});

app.listen(3333, () => {
  console.log('🚀 Server has started on port 3333!');
});
