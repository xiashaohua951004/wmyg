'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.get('/news/list',controller.news.list);
    router.get('/news/detail',controller.news.detail);
    router.get('/announce/list',controller.announce.list);
    router.get('/announce/detail',controller.announce.detail);
    router.get(/^\/static\/[\w-.]+$/, controller.static.index);
};
