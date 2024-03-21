"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardData = exports.apiData = exports.serverData = void 0;
const config_1 = __importDefault(require("../config"));
const appId = config_1.default.APPLICATION_ID;
const appName = config_1.default.APP_NAME;
const masterKey = config_1.default.MASTER_KEY;
const port = config_1.default.HTTP_PORT;
const useStream = config_1.default.USE_STREAMS;
const streamWebHookURL = config_1.default.STREAMS_WEBHOOK_URL;
const serverEndPonint = config_1.default.SERVER_ENDPOINT;
const allowInsecureHttp = config_1.default.ALLOW_INSECURE_HTTP;
const cloudPath = config_1.default.CLOUD_PATH;
const serverURL = config_1.default.SERVER_URL;
const serverPublicUrl = config_1.default.DEVELOPMENT_MODE === 'prod' ? config_1.default.SERVER_PUBLIC_URL_PROD : config_1.default.SERVER_PUBLIC_URL_DEV;
const dataBaseUri = config_1.default.DEVELOPMENT_MODE === 'prod' ? config_1.default.DATABASE_URI_PROD : config_1.default.DATABASE_URI_DEV;
const moralisApiKey = config_1.default.DEVELOPMENT_MODE === 'prod' ? config_1.default.MORALIS_API_KEY_PROD : config_1.default.MORALIS_API_KEY_DEV;
const moralisApiKeyStreams = config_1.default.DEVELOPMENT_MODE === 'prod' ? config_1.default.MORALIS_API_KEY_STREAMS_PROD : config_1.default.MORALIS_API_KEY_STREAMS_DEV;
const sendGridMailApiKey = config_1.default.SENDGRID_MAIL_API_KEY;
const sendGridMailSender = config_1.default.SENDGRID_MAIL_SENDER;
const sendGridPassResetEmailTemplate = config_1.default.SENDGRID_PASS_RESET_EMAIL_TEMPLATE;
const sendGridVerifyEmailTemplate = config_1.default.SENDGRID_VERIFY_EMAIL_TEMPLATE;
const { USER_DASHBOARD1, USER_PASS_DASHBOARD1, USER_DASHBOARD2, USER_PASS_DASHBOARD2, USER_DASHBOARD3, USER_PASS_DASHBOARD3 } = config_1.default;
const serverData = {
    appName,
    dataBaseUri,
    cloudPath,
    appId,
    masterKey,
    serverURL,
    serverPublicUrl,
    allowInsecureHttp,
    useStream,
    serverEndPonint,
    streamWebHookURL,
    port
};
exports.serverData = serverData;
const apiData = {
    moralisApiKey,
    moralisApiKeyStreams,
    sendGridMailApiKey,
    sendGridMailSender,
    sendGridPassResetEmailTemplate,
    sendGridVerifyEmailTemplate
};
exports.apiData = apiData;
const dashboardData = {
    userDash1: USER_DASHBOARD1,
    passDash1: USER_PASS_DASHBOARD1,
    userDash2: USER_DASHBOARD2,
    passDash2: USER_PASS_DASHBOARD2,
    userDash3: USER_DASHBOARD3,
    passDash3: USER_PASS_DASHBOARD3
};
exports.dashboardData = dashboardData;
//# sourceMappingURL=choice_type_env.js.map