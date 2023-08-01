export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"瓦粉 - 无畏契约资料站\",\"description\":\"瓦粉是无畏契约粉丝资料库，由爱好者维护，提供原画，语音，模型，介绍等一系列服务。\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"valorant,无畏契约,瓦罗兰特,插画,语音,模型,二创,地图,cosplay\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}