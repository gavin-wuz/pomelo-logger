
module.exports = {
    jsonLayout: function (pomeloLogger) {
        pomeloLogger.addLayout("json", function (config) {
            return function (le) {
                function toUpperCase(str) {
                    return str && str.toUpperCase() || ''
                }
                return JSON.stringify({
                    startTime: pomeloLogger.formatAsDate("yyyy-MM-ddThh:mm:ss.SSSO", le.startTime),
                    v: "1.0",
                    cate: toUpperCase(le.categoryName),
                    level: toUpperCase(le.level.levelStr),
                    server_name: le.context['server_name'] || "server",
                    msg: le.data.join(" ")
                }) + config.separator;
            };
        });
    }
}