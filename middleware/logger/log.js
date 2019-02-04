const log4js = require('log4js');
const methods = ["trace", "debug", "info", "warn", "error", "fatal", "mark"]

module.exports = () => {
    const contextLogger = {}
    const config = {
        appenders: {
            cheese: {
                type: 'dateFile', // 日志类型 
                filename: `logs/task`, // 输出的文件名
                pattern: '-yyyy-MM-dd.log', // 文件名增加后缀
                alwaysIncludePattern: true // 是否总是有后缀名
            }
        },
        categories: {
            default: {
                appenders: ['cheese'],
                level: 'info'
            }
        }
    }

    const logger = log4js.getLogger('cheese');
    const errorLogger = log4js.getLogger('error');
    const resLogger = log4js.getLogger('response');

    // 封装错误日志
    logger.errLogger = (ctx, error, resTime) => {
        if (ctx && error) {
            errorLogger.error(formatError(ctx, error, resTime))
        }
    };

    return async(ctx, next) => {
        const start = Date.now();

        log4js.configure(config)
        methods.forEach((method, i) => {
            contextLogger[method] = (message) => {
                logger[method](message)
            }
        })
        ctx.log = contextLogger;

        await next()
        const responseTime = Date.now() - start;

        logger.info(`响应时间为${responseTime/1000}s`);
    }
}