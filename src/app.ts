import express, { Application } from 'express';
import Routes from './routes';
const app: Application = express();

app.get('/', (req, res) => {});

app.use('/api', Routes);

app.listen(8090, () => {
  console.log('App running');
});
