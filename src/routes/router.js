const Router = require('koa-router');
const Stream = require('stream');
const router = new Router();
const fs = require('fs');
const randomLog = require('../utils/formLogRandomly');
const logIfErrorExists = require('../utils/logIfErrorExists');
const EMPTY_STRING = "";

router.get('/', async (ctx, next) => {
    ctx.body = randomLog();
    next();
});


router.get('/logs', async (ctx, next) => {
    const response = fs.createReadStream(ctx.config.app.path_to_logs);
    ctx.body = response;
    next();
});

router.get('/logs/delete', async (ctx, next) => {
    fs.writeFile(ctx.config.app.path_to_logs, EMPTY_STRING, logIfErrorExists);
    next();
});

module.exports = router;