const pomeloLogger = require('../index')
const layout = require('./layout')
layout.jsonLayout(pomeloLogger);

const serverId = 'gate-server-1'
console.info("__dirname：", __dirname)
pomeloLogger.configure("./examples/log4js.json", { base: __dirname, serverId: serverId });

var logger = pomeloLogger.getLogger('gate', __filename, process.pid);
logger.addContext("server_name", serverId);

for (var i = 0; i < 100; i++) {
    setTimeout(() => {

        logger.info('test1');
        logger.warn('test2');
        logger.error('test3"\\hello/r/n;\r\n');

    }, 1000)
}