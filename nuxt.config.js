var morgan = require("morgan");
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  // css: ["ant-design-vue/dist/antd.css", "~/assets/css/theme.css"],
  css: ["~/assets/css/theme.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "@/plugins/antd-ui",
    {
      src: "~/plugins/axios"
    },
    {
      src: "~/plugins/students"
    }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    //是否允许跨域
    proxy: true,
    //最多重发三次
    retry: { retries: 3 },
    //开发模式下开启debug
    debug: process.env._ENV == "production" ? false : true,
    //设置不同环境的请求地址
    baseURL:
      process.env._ENV == "production"
        ? "http://localhost:3005/api"
        : "http://localhost:3005/api",
    //是否是可信任
    withCredentials: true
  },
  proxy: {
    "/api": {
      target: "http://localhost:3005",
      pathRewrite: { "^/api": "" }
    }
  },
  serverMiddleware: [morgan("dev")],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  router: {
    extendRoutes(routes, resolve) {
      (function() {
        const indexIndex = routes.findIndex(route => route.name === "named");
        let index = routes[indexIndex].children.findIndex(
          route => route.name === "named-id"
        );
        routes[indexIndex].children[index] = {
          ...routes[indexIndex].children[index],
          components: {
            default: routes[indexIndex].children[index].component,
            one: resolve(__dirname, "components/one.vue"),
            two: resolve(__dirname, "components/two.vue")
          },
          chunkNames: {
            one: "components/one",
            two: "components/two"
          }
        };
      })();
      (function() {
        const indexIndex = routes.findIndex(route => route.name === "info");
        let index = routes[indexIndex].children.findIndex(
          route => route.name === "info-addStudent"
        );
        routes[indexIndex].children[index] = {
          ...routes[indexIndex].children[index],
          components: {
            default: routes[indexIndex].children[index].component,
            one: resolve(__dirname, "components/one.vue"),
            two: resolve(__dirname, "components/two.vue")
          },
          chunkNames: {
            one: "components/one",
            two: "components/two"
          }
        };
      })();
      (function() {
        const indexIndex = routes.findIndex(route => route.name === "info");
        routes[indexIndex] = {
          ...routes[indexIndex],
          components: {
            default: routes[indexIndex].component,
            one: resolve(__dirname, "components/one.vue"),
            two: resolve(__dirname, "components/two.vue")
          },
          chunkNames: {
            one: "components/one",
            two: "components/two"
          }
        };
      })();
    }
  }
};
