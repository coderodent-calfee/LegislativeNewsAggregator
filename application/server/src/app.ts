import express from 'express';
import cors from 'cors';
import {setupNewsRouter} from './routes/news';

export const SERVER_PORT = 3035;
export const CLIENT_PORT = 3000;
export const app = express();

// Add a list of allowed origins.
const allowedOrigins = [`http://localhost:${CLIENT_PORT}`];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());


console.error("app.get('/'");
app.get('/', (req, res) => {
  res.send(`This is the Server: Hello World! I'm an Express App, listening at http://localhost:${SERVER_PORT}/`);
});

console.error("setupNewsRouter");
setupNewsRouter(app);

app.get('*', (req, res) => {
  res.send(`This is the Server: 404\n ${req.url} not found`);
});

console.error(`NOW app.listen SERVER_PORT: ${SERVER_PORT}`);
app.listen(SERVER_PORT, () => {
  return console.log(`console.log:  Express is listening at http://localhost:${SERVER_PORT}`);
});
