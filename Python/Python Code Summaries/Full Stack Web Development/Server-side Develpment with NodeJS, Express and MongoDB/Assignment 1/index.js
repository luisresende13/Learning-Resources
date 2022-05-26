// Express Web Server -----------------------------------------------
//Importing ...
const express=require('express')
//Express App Setting ... 
const app = express();

// Express Router -----------------------------------------------
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
//-------------------------------------------------------

// Server Settings ...
http=require('http');
const hostname = 'localhost'; const port = 3000;

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


