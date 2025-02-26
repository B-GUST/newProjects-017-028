"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRateLimit = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-ignore
const parse_server_1 = require("parse-server");
const config_1 = __importDefault(require("./config"));
const redisConnectionString = config_1.default.DEVELOPMENT_MODE === 'prod' ? config_1.default.MORALIS_API_KEY_STREAMS_PROD : config_1.default.REDIS_CONNECTION_STRING_DEV;
const redisClient = new parse_server_1.RedisCacheAdapter({ url: redisConnectionString });
const getRateLimitKeys = (identifier) => `ratelimit_${identifier}`;
const resetTtl = async (key) => {
    await redisClient.put(key, 0, config_1.default.RATE_LIMIT_TTL * 1000);
    return 0;
};
const updateRecord = (key) => {
    redisClient.client.incr(key);
};
const redisQuery = async (key) => {
    return new Promise((resolve) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        redisClient.client.ttl(key, async (error, data) => {
            if (data < 0) {
                resolve(resetTtl(key));
            }
            const result = await redisClient.get(key);
            resolve(result);
        });
    });
};
const checkStatus = async (identifier, requestLimit) => {
    const key = getRateLimitKeys(identifier);
    const rateLimitCount = (await redisQuery(key));
    let response;
    if (rateLimitCount < requestLimit) {
        updateRecord(key);
        response = true;
    }
    else {
        response = false;
    }
    return response;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleRateLimit = async (user, ip) => {
    let status;
    if (user && user.id) {
        status = await checkStatus(user.id, config_1.default.RATE_LIMIT_AUTHENTICATED);
    }
    status = await checkStatus(ip, config_1.default.RATE_LIMIT_ANONYMOUS);
    return status;
};
exports.handleRateLimit = handleRateLimit;
//# sourceMappingURL=rateLimit.js.map