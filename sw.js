/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/08/21/第一次尝试/index.html","08c2580b74298c98bee4c552913a803e"],["/2022/09/04/图片/1.jpg","c5f2f5d22a407cc847c5ba7aa35e4549"],["/2022/09/04/图片/2.jpg","4c0a9fdb492479321a171c79d256aede"],["/2022/09/04/图片/index.html","bccad85e3c83d03e97f66a650e57f48e"],["/2022/09/04/复变函数——复数及其表示/1.png","c5e257ac4188304fbc240353adc87af0"],["/2022/09/04/复变函数——复数及其表示/2.png","30df3bd43e13c077288df2d7c8b42c2c"],["/2022/09/04/复变函数——复数及其表示/3.png","902cfebafa206cd6bfbda4d5f92e4765"],["/2022/09/04/复变函数——复数及其表示/index.html","e95c672b61e03c4858c22915d636bed4"],["/2022/09/09/java/index.html","1902e48104a985d969be624e91ea5a8b"],["/about/index.html","d9f64eab2a4c000c66536b919015ec73"],["/archives/2022/08/index.html","86ce788025bb59b9f619a0dbae1fee57"],["/archives/2022/09/index.html","6c182f7d98646877f80f9a87c88761cb"],["/archives/2022/index.html","0162d24d03c8d8fef23ac3e812feb8d9"],["/archives/index.html","37213b0575cb51af81a78862d176e7d7"],["/assets/autoload.js","bb9a55314bd012124f7353a56672342f"],["/assets/flat-ui-icons-regular.eot","f1d025e1d5dc1b25678397fcf6ae70d7"],["/assets/flat-ui-icons-regular.svg","ffc6ede02a31ec3b6990bfa29c64fdd6"],["/assets/flat-ui-icons-regular.ttf","71b22c7da4697bc0680e3f603929faba"],["/assets/flat-ui-icons-regular.woff","b850ecca5ab51e9035e6a36eb33b421a"],["/assets/jquery-ui.min.js","c15b1008dec3c8967ea657a7bb4baaec"],["/assets/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/assets/live2d.js","4af772ebedff81ae0580babc8a6e7a19"],["/assets/live2d.min.js","b82606b349484ab6b696144862b18b5a"],["/assets/waifu-tips.js","d540102ca1d484ffaa51b14454772e2d"],["/assets/waifu-tips.min.js","11d6bdc8faa4c5899e0c25ddf43fe5ad"],["/assets/waifu.css","c78cfd921e0d367f944f13bcaaafaa0f"],["/assets/waifu.min.css","6d3a6bce02a9404bc3d331f7482f597c"],["/categories/index-1.html","01d7110aaeb785cf836beb159216ae8e"],["/categories/index.html","ceeb363fc177b83252abf2018d456488"],["/categories/java/index.html","5fc8a83291a8d783212b80bd9fc0fcee"],["/categories/复变函数/index.html","cf4d56ebd0f4d9ef834c7c8fcde8735d"],["/css/custom.css","6d9bdf346dab53f363d1971807e941c1"],["/css/index.css","c0644c8afd8eb8d7442b3b059022e577"],["/css/mouse.css","172d54312b404df4ddd5bf39879a05d8"],["/css/universe.css","d928cdece910271fdbad6776f6ead309"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/2.jpg","4c0a9fdb492479321a171c79d256aede"],["/img/3.jpg","f18821dbfa5a525f1edcda2c018b03cc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.png","0953b5e3be5430ab5822dacb396d92af"],["/img/OIP-C.png","9406a63b17a63ddcdc2e8b376e7a988c"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/avatar.png","c5f2f5d22a407cc847c5ba7aa35e4549"],["/img/back.png","7b8a1a81de7046ac6fff98589fe1cf3b"],["/img/engle.png","ec13ca3d4e5ef52c9c18279c40b6a966"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icons8-猫头鹰-stickers-16.png","eb7a64a65613a77349337f55eee0b6ed"],["/img/java.png","fb224fe58513b1ab6b8d2a0921df5bb2"],["/img/math_integral_icon_137418.png","da11bc5e2754dff9c716b0a3cf71148f"],["/index.html","b282b6cf8e94955bc3fcacd9702495e8"],["/js/cursor.js","0becedb5f6672357f8fc03b85f826a2b"],["/js/main.js","fe88918ae3b0d986d877ba45f3ff3145"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fdf5611db349d1f9916577b1007532d5"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2d-widget/README.html","ce1d634249f7971cb1713b597972e6b5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","bf4acf9c27c11c29bd2c75e87baad8b3"],["/live2d-widget/demo/demo.html","c3739fe6dc739932b79f9bb2dabf1c02"],["/live2d-widget/demo/login.html","a3786e750803a5e2d2b583c6f74e048c"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","93a9d7348151878beb55616e1882521f"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/resources/index.html","cbe04fc90263e1599f85a87716dfbdb4"],["/sw-register.js","820992d6ef91193cfb188156fd9a9f62"],["/tags/index.html","7d2a3131058b66b6de9728d2393c356e"]];
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
