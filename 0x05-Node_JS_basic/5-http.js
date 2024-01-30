const http = require('http');
const fs = require('fs').promises; // Using promises for async file reading
const { countStudents } = require('./3-read_file_async');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
      res.end();
    },
  },
  {
    route: '/students',
    async handler(_, res) {
      const responseParts = ['This is the list of our students'];

      try {
        const databasePath = process.argv[2];
        if (!databasePath) {
          throw new Error('Database path is missing. Please provide the path as a command-line argument.');
        }

        const report = await countStudents(databasePath);
        responseParts.push(report);

        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
        res.end();
      } catch (error) {
        responseParts.push(error instanceof Error ? error.message : error.toString());
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
        res.end();
      }
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
