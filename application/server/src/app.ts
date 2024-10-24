import express from 'express';
//import http from 'http';
import cors from 'cors';
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

export function getPathQueries(url : string) {
  console.log("getPathQueries(url: ", url);

  const [path, params] = url.split('?');
  const queries = params.split('&');
  let queryParams = new Map()
  queries.forEach((query) => {
    const [key, value] = query.split('=');
    queryParams.set(key, value);
  });
  return { path: path, queryParams: queryParams };
}

console.error("app.listen SERVER_PORT");
app.listen(SERVER_PORT, () => {
  return console.log(`console.log:  Express is listening at http://localhost:${SERVER_PORT}`);
});

console.error("app.get('/'");
app.get('/', (req, res) => {
  res.send(`This is the Server: Hello World! I'm an Express App, listening at http://localhost:${SERVER_PORT}/`);
});

console.error("app.get('/search'");

app.get('/search', (req : any, res : any) => {
  console.log("req: ", req);
  const { path, queryParams } = getPathQueries(req.url);
  console.log("path: ", path);
  console.log("queryParams: ", queryParams);
  res.send(`I GOT A GET
    This is the Server: Hello World! 
    I'm an Express App, listening at http://localhost:${SERVER_PORT}/${path}`);
});