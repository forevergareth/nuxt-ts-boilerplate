const isDev = process.env.NODE_ENV !== "production";

export default {
  mode: "universal",
  modern: !isDev,
  /*
   ** Headers of the page
   */
  env: {},
  head: {
    title: "boilerplate",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "boilerplate" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/all.scss"],
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/dotenv", "@nuxtjs/axios"],
  tailwindcss: {
    exposeConfig: true,
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    debug: false,
    baseURL: "",
    proxy: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
      ],
    },
    extend(config, ctx) {},
  },
};
