'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1531721800845_4655';

    // add your config here
    config.middleware = [];

    exports.view = {
        defaultViewEngine: 'nunjucks',
    };

    config.httpclient = {
        request: {
            headers: {
                "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
                "Accept":"application/json",
                'X-Requested-With': 'XMLHttpRequest',
            },
            dataType: 'json'
        }
    }

        config.apiBaseUrl = "http://admin.weimengyungu.cn/api";

    return config;
};
