// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    routeRules: {
      // toast-ui editor 가 SSR 을 지원하지 않아 reload시 에러가 나는것을 방지하기위해 임시조치
      "editor/toast": {
        ssr: false,
      },
    },
  },
});
