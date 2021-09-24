const Koa = require('koa');
const fs = require('fs');
const yaml = require('yaml');
const helmet = require('koa-helmet');

const router = require('./routes/router');
const getRandomNumber = require('./utils/getRandomNumber');
const formLogRandomly = require('./utils/formLogRandomly');
const logIfErrorExists = require('./utils/logIfErrorExists');

const pathToConfig = `${__dirname}/../config.yaml`


const app = new Koa();
const file = fs.readFileSync(pathToConfig, 'utf-8');
const config = yaml.parse(file);

app.context.config = config;

app
    .use(helmet())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(config.app.port);

setInterval(() => fs.writeFile(config.app.path_to_logs, formLogRandomly(), {flag: 'a'}, logIfErrorExists) ,getRandomNumber(500, 2000));


