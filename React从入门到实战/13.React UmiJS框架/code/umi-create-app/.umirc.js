
// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    routes: [
        {
            path: '/',
            component: '../layouts/index',
            routes: [
                {
                    path: '/',
                    component: '../pages/index'
                },
                {
                    path: '/user',
                    component: '../pages/user'
                },
                {
                    path: "/ucenter",
                    component: "../pages/ucenter"
                }
            ]
        }
    ],
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: {
                immer: true
            },
            dynamicImport: {
                webpackChunkName: true,
                loadingComponent: "./components/loading.jsx",
                level: 1
            },
            locale: {
                default: 'en.US',
                baseNavigator: false,
                antd: false,
                baseSeparator: "."
            },
            title: "hello umi",
            dll: {
                include: ["dva/router", "dva/saga", "dva/fetch"],
                exclude: ["@babel/runtime"]
            },
            routes: {
                exclude: [
                    /components\//,
                ],
            }
        }],
    ],
    chainWebpack: function (config, { webpack }) {
        config.merge({
            optimization: {
                minimize: true,
                splitChunks: {
                    chunks: 'all',
                    minSize: 30000,
                    minChunks: 3,
                    automaticNameDelimiter: '.',
                    cacheGroups: {
                        vendor: {
                            name: 'vendors',
                            test({ resource }) {
                                return /[\\/]node_modules[\\/]/.test(resource);
                            },
                            priority: 10,
                        },
                    },
                },
            }
        });
    },
    targets: {
        ie: 11,
    },
    proxy: {
        "/api": {
            "target": "http://tingapi.ting.baidu.com",
            "changeOrigin": true,
            "pathRewrite": { "^/api": "" }
        }
    }
}
