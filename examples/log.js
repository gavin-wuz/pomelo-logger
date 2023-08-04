const pomeloLogger = require('../index')
// const layout = require('./layout')
// layout.jsonLayout(pomeloLogger);

pomeloLogger.configure({
    rawMessage: false,
    appenders: {
        console: {
            type: "console",
            // layout: { type: "json", separator: "" }
            // layout: { type: "pattern", pattern: "%d{ISO8601_WITH_TZ_OFFSET} %c %p - %m" }
        }
    },
    categories: {
        default: { appenders: ["console"], level: "info" },
        gate: { appenders: ["console"], level: "warn" }
    },
});

// var logger = require('pomelo-logger').getLogger('log', __filename, process.pid);
var logger = pomeloLogger.getLogger('gate', __filename, process.pid);
logger.addContext("server_name", "gate-server-1");

process.env.LOGGER_LINE = true;
logger.info('test1');
logger.warn('test2');
logger.error('test3"\\hello/r/n;');


var logger2 = pomeloLogger.getLogger('pomelo', __filename, process.pid);

logger2.debug('pomelo debug"\\hello/r/n;');
logger2.info('pomelo info"\\hello/r/n;');
logger2.error('pomelo error"\\hello/r/n;');