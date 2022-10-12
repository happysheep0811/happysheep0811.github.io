/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/08/21/第一次尝试/index.html","e424b207c79be57a6c1a31ec59006147"],["/2022/09/04/图片/1.jpg","c5f2f5d22a407cc847c5ba7aa35e4549"],["/2022/09/04/图片/2.jpg","4c0a9fdb492479321a171c79d256aede"],["/2022/09/04/图片/index.html","7a4eae7e5a2218654defff9059a88ddc"],["/2022/09/04/复变函数——复数及其表示/1.png","c5e257ac4188304fbc240353adc87af0"],["/2022/09/04/复变函数——复数及其表示/2.png","30df3bd43e13c077288df2d7c8b42c2c"],["/2022/09/04/复变函数——复数及其表示/3.png","902cfebafa206cd6bfbda4d5f92e4765"],["/2022/09/04/复变函数——复数及其表示/index.html","10ad6f7daada66618f1837fca54e47f4"],["/2022/09/09/java/index.html","6c3f9f4d27512eeb294803560b2184c8"],["/2022/09/16/java-数据类型/index.html","5ab33594bd535d6c961ddaf337905587"],["/2022/09/16/复变函数-解析函数/1.jpg","0d91a2e4741d2e09ef38fa0f3eb7be8c"],["/2022/09/16/复变函数-解析函数/10.jpg","166556d7530563c0431948aaecaecb11"],["/2022/09/16/复变函数-解析函数/11.jpg","cac85a1aea73dff2d49e36bf7ce23ed7"],["/2022/09/16/复变函数-解析函数/2.jpg","4c0a9fdb492479321a171c79d256aede"],["/2022/09/16/复变函数-解析函数/3.jpg","31d9072e754a54416aaf4e897fdf67b6"],["/2022/09/16/复变函数-解析函数/4.jpg","1cd88dd40074f1ff52e207dc30f8c52d"],["/2022/09/16/复变函数-解析函数/5.jpg","a63dae3f932af7925a836954db2b798f"],["/2022/09/16/复变函数-解析函数/6.jpg","7a0fb5c7166a920de673d075b3189267"],["/2022/09/16/复变函数-解析函数/7.jpg","0b9946577fd35269f52cf229d474a35e"],["/2022/09/16/复变函数-解析函数/8.jpg","b6e698f672f339296c677bd684d3c07b"],["/2022/09/16/复变函数-解析函数/9.jpg","c472b33be19b545598f92beb79247bec"],["/2022/09/16/复变函数-解析函数/index.html","82f1f4605989633e5db8dde7d1859416"],["/2022/09/21/力扣刷题-两数之和/index.html","f390260c217e38c82e6d92ceb8517236"],["/2022/09/21/力扣刷题-两数之和/twonums.png","024dce9cd454d7422b67c12f14b1b068"],["/2022/09/24/力扣刷题-两数相加/1.png","c06e7fa600fddd1367bc22edae8d7e7b"],["/2022/09/24/力扣刷题-两数相加/index.html","10edb92e2a991e3db4b0a49a5a32f45c"],["/2022/09/24/力扣刷题-无重复字符最长字符串/1.png","a78e84478ae1e9892372edb3bd70f07f"],["/2022/09/24/力扣刷题-无重复字符最长字符串/index.html","61246424b8df82388907010d417a3a47"],["/2022/10/12/java排序/index.html","d18e22990c93fabd9cc17e93aded54eb"],["/2022/10/12/java排序/select.gif","44be35da53ae9ee564ce444542a43d10"],["/about/index.html","0e7164eb419f827c2c17b4337ed51b58"],["/archives/2022/08/index.html","9b365f4dec60a107a6a1dec79fe3bdb7"],["/archives/2022/09/index.html","f02272d9e01d8123d270445aa911c0f7"],["/archives/2022/10/index.html","1176cb886adec244b026263366e3d058"],["/archives/2022/index.html","eb155fa1de49e8e8970a9083a205451f"],["/archives/index.html","25e73f65e48c5adac2e052cacdcb7e89"],["/assets/autoload.js","bb9a55314bd012124f7353a56672342f"],["/assets/flat-ui-icons-regular.eot","f1d025e1d5dc1b25678397fcf6ae70d7"],["/assets/flat-ui-icons-regular.svg","ffc6ede02a31ec3b6990bfa29c64fdd6"],["/assets/flat-ui-icons-regular.ttf","71b22c7da4697bc0680e3f603929faba"],["/assets/flat-ui-icons-regular.woff","b850ecca5ab51e9035e6a36eb33b421a"],["/assets/jquery-ui.min.js","c15b1008dec3c8967ea657a7bb4baaec"],["/assets/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/assets/live2d.js","4af772ebedff81ae0580babc8a6e7a19"],["/assets/live2d.min.js","b82606b349484ab6b696144862b18b5a"],["/assets/waifu-tips.js","d540102ca1d484ffaa51b14454772e2d"],["/assets/waifu-tips.min.js","11d6bdc8faa4c5899e0c25ddf43fe5ad"],["/assets/waifu.css","c78cfd921e0d367f944f13bcaaafaa0f"],["/assets/waifu.min.css","6d3a6bce02a9404bc3d331f7482f597c"],["/categories/index-1.html","9285b5cb09995c50a84dd67e450dc06d"],["/categories/index.html","5c378e97cb16ad44106defc184d21931"],["/categories/java/index.html","4ce9ad69299e1f381639c2e3f5ef584c"],["/categories/力扣刷题/index.html","1719232d8e7ae0d986da97bf84125cfd"],["/categories/复变函数/index.html","8ca0eabf6fec68489d0f27cd4d9a467c"],["/css/custom.css","6d9bdf346dab53f363d1971807e941c1"],["/css/index.css","5f5e71f93a7ae50369e25c1f68f57b47"],["/css/mouse.css","172d54312b404df4ddd5bf39879a05d8"],["/css/universe.css","d928cdece910271fdbad6776f6ead309"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/2.jpg","4c0a9fdb492479321a171c79d256aede"],["/img/3.jpg","f18821dbfa5a525f1edcda2c018b03cc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.png","0953b5e3be5430ab5822dacb396d92af"],["/img/OIP-C.png","9406a63b17a63ddcdc2e8b376e7a988c"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/avatar.png","c5f2f5d22a407cc847c5ba7aa35e4549"],["/img/back.png","7b8a1a81de7046ac6fff98589fe1cf3b"],["/img/code.png","c98e9914e0678e752c9cdc4e42d23a05"],["/img/dingzhen.jpg","5872e284306a40b3b4ea9b018097f435"],["/img/engle.png","ec13ca3d4e5ef52c9c18279c40b6a966"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icons8-猫头鹰-stickers-16.png","eb7a64a65613a77349337f55eee0b6ed"],["/img/java.png","fb224fe58513b1ab6b8d2a0921df5bb2"],["/img/math_integral_icon_137418.png","da11bc5e2754dff9c716b0a3cf71148f"],["/img/page1.jpg","cfa32413ea6c3c7134f80d074c6df89d"],["/img/page2.jpg","ba14022d5e3f86756010876a91875c0e"],["/img/v2-489bb214622f321f132f33c17a954d57_r.jpg","e55708df2c257135f18ca0a1e5e1edc2"],["/img/v2-9b081b69b5648fd04a03f374516ea010_r.jpg","7d309aded364344a6c7f2504f79520bb"],["/index.html","3273d14728d93fbca0bdff0e7cfd1593"],["/js/cursor.js","0becedb5f6672357f8fc03b85f826a2b"],["/js/main.js","fe88918ae3b0d986d877ba45f3ff3145"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fdf5611db349d1f9916577b1007532d5"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2d-widget/README.html","ce1d634249f7971cb1713b597972e6b5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","bf4acf9c27c11c29bd2c75e87baad8b3"],["/live2d-widget/demo/demo.html","6426f02ce6351cc2d247825a58ff6e36"],["/live2d-widget/demo/login.html","9a7d7f0060ebc4174cb3d6a6eb14b690"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","93a9d7348151878beb55616e1882521f"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/resources/index.html","24f2f79c8c90270aa89a3db3aa318b9f"],["/sw-register.js","fd15218906864586064bfd56ad92090d"],["/tags/index.html","6763f0ac00cb2113c08d609f5bbe4b72"],["/tags/java/index.html","07a6f02f146a49047d74a90b253d1638"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
