import text from 'text';
import http from 'http';

const port = 3000;

const render = (message) => `<!DOCTYPE html>
<head>
    <meta charset="utf-8" />
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    ${process.env.NODE_ENV === 'development' ?
      `<script src="http://localhost:${process.env.__LIVE_RELOAD__}/livereload.js"></script>` :
      ''
    }
    <title></title>
</head>
<body>
    <div id="wrapper">
        ${message}
    </div>
</body>
</html>`;

const requestHandler = (request, response) => {
  response.writeHeader(200, { 'Content-Type': 'text/html' });
  response.write(render(text));
  response.end();
};

const server = http.createServer(requestHandler);

const listen = () => {
  server.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);

    if (process.env.NODE_ENV === 'development') {
      console.log(`LiveReload connected to ${process.env.__LIVE_RELOAD__} port`);
    }
  });
}

export default listen;
