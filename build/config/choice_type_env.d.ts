declare const serverData: {
    appName: string;
    dataBaseUri: string;
    cloudPath: string;
    appId: string;
    masterKey: string;
    serverURL: string;
    serverPublicUrl: string;
    allowInsecureHttp: boolean;
    port: number;
    useStream: boolean;
    serverEndPonint: string;
    streamWebHookURL: string;
};
declare const apiData: {
    moralisApiKey: string;
    moralisApiKeyStreams: string;
    sendGridMailApiKey: string;
    sendGridMailSender: string;
    sendGridPassResetEmailTemplate: string;
    sendGridVerifyEmailTemplate: string;
};
declare const dashboardData: {
    userDash1: string;
    passDash1: string;
    userDash2: string;
    passDash2: string;
    userDash3: string;
    passDash3: string;
};
export { serverData, apiData, dashboardData };
