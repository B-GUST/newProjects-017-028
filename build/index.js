"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = exports.app = void 0;
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
// @ts-ignore
const parse_server_1 = __importDefault(require("parse-server"));
const moralis_1 = __importDefault(require("moralis"));
const config_1 = __importDefault(require("./config"));
// @ts-ignore
const parse_server_2 = require("@moralisweb3/parse-server");
const http_1 = __importDefault(require("http"));
// @ts-ignore
const parseServer_1 = require("./parseServer");
const parseDashboard_1 = require("./parseDashboard");
// @ts-ignore
const parseUpdate_1 = require("./utils/parseUpdate");
// @ts-ignore
const parseEventData_1 = require("./utils/parseEventData");
// @ts-ignore
const index_1 = require("./utils/schemas/conserge_inteligente/index");
const port = config_1.default.HTTP_PORT;
const Web3 = require('web3');
// createSuper()
const whitelist = ['http://www.servertest.com', 'http://servertest-front-prod-40jlpbzl6-servertest.vercel.app'];
const corsOptions = {
    origin(origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
exports.app = (0, express_1.default)();
const moralisApiKey = config_1.default.DEVELOPMENT_MODE === 'prod' ? config_1.default.MORALIS_API_KEY_PROD : config_1.default.MORALIS_API_KEY_DEV;
const moralisApiKeyStreams = config_1.default.DEVELOPMENT_MODE === 'prod' ? config_1.default.MORALIS_API_KEY_STREAMS_PROD : config_1.default.MORALIS_API_KEY_STREAMS_DEV;
config_1.default.DEVELOPMENT_MODE === 'prod' ? console.log('prod') : console.log('dev');
moralis_1.default.start({
    apiKey: moralisApiKey,
});
const verifySignature = (req, secret) => {
    const providedSignature = req.headers['x-signature'];
    if (!providedSignature) {
        throw new Error('Signature not provided');
    }
    const generatedSignature = Web3.utils.sha3(JSON.stringify(req.body) + secret);
    if (generatedSignature !== providedSignature) {
        throw new Error('Invalid Signature');
    }
};
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.json({ limit: '50mb' }));
exports.app.use((0, cors_1.default)());
exports.app.use((0, parse_server_2.streamsSync)(parseServer_1.parseServer, {
    apiKey: moralisApiKeyStreams,
    webhookUrl: config_1.default.STREAMS_WEBHOOK_URL,
}));
exports.app.use(`/server`, parseServer_1.parseServer.app);
exports.app.use(`/dashboard`, parseDashboard_1.parseDashboard);
exports.app.use(express_1.default.static('public'));
exports.app.post(`/streams`, async (req, res) => {
    try {
        verifySignature(req, moralisApiKey);
        const { data, _tagName, eventName } = (0, parseEventData_1.parseEventData)(req);
        await (0, parseUpdate_1.parseUpdate)(`SFS_${eventName}`, data);
        res.send('ok');
        return res.status(200).json();
    }
    catch (error) {
        return error;
    }
});
exports.app.get('/schema', (req, res) => {
    try {
        (0, index_1.schemaConserge_Inteligente)();
        res.send('ok');
    }
    catch (error) {
        res.send(error);
    }
});
exports.httpServer = http_1.default.createServer(exports.app);
exports.httpServer.listen(port, async () => {
    if (config_1.default.USE_STREAMS) {
        // eslint-disable-next-line no-console
        return config_1.default.STREAMS_WEBHOOK_URL;
    }
    // eslint-disable-next-line no-console
    return port;
});
// This will enable the Live Query real-time server
parse_server_1.default.createLiveQueryServer(exports.httpServer);
//# sourceMappingURL=index.js.map