import app from './app';
import './config/database';

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 8082;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
