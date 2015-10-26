const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');

app.use(serve('dist/'));

app.listen(process.env.PORT);
console.log('listening on port ', process.env.PORT);
