module.exports = appInfo => {
    const config = exports = {};
    config.onerror= {
        errorPageUrl: '/static/notfound',
    }
    config.notfound= {
        pageUrl: '/static/notfound',
    }
    config.apiBaseUrl = "http://w.madonghua.com/api";
    return config;
};