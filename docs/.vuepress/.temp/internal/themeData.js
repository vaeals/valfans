export const themeData = JSON.parse("{\"logo\":\"/images/logo.svg\",\"sidebarDepth\":2,\"editLink\":false,\"editLinkText\":\"编辑此页\",\"lastUpdated\":false,\"lastUpdatedText\":\"更新时间：\",\"contributors\":false,\"notFound\":[\"404 - 错误地址！\",\"走错了，回去吧!\",\"来到了一片遗失之地!\",\"进入了虚无空间!\"],\"backToHome\":\"返回首页\",\"colorModeSwitch\":true,\"sidebar\":{\"/hero/\":[{\"text\":\"英雄介绍与解析\",\"collapsible\":false,\"children\":[\"/hero/Breach.md\",\"/hero/Jett.md\",\"/hero/Raze.md\",\"/hero/Omen.md\",\"/hero/Brimstone.md\",\"/hero/Phoenix.md\",\"/hero/Sage.md\",\"/hero/Sova.md\",\"/hero/viper.md\",\"/hero/Cypher.md\",\"/hero/Reyna.md\",\"/hero/Killjoy.md\",\"/hero/Skye.md\",\"/hero/Agent.md\",\"/hero/Astra.md\",\"/hero/KAYO.md\",\"/hero/chamber.md\",\"/hero/neon.md\",\"/hero/fade.md\",\"/hero/Harbor.md\",\"/hero/Gekko.md\",\"/hero/Deadlock.md\"]}],\"/maps/\":[{\"text\":\"地图详解与鉴赏\",\"children\":[\"/maps/Ascent.md\",\"/maps/Bind.md\",\"/maps/Breeze.md\",\"/maps/Fracture.md\",\"/maps/Haven.md\",\"/maps/Icebox.md\",\"/maps/Lotus.md\",\"/maps/Pearl.md\",\"/maps/Split.md\"]}],\"/wallpaper/\":[{\"text\":\"官方画廊\",\"children\":[\"/wallpaper/\",\"/wallpaper/wallpapers.md\",\"/wallpaper/videos.md\",\"/wallpaper/Screenshots.md\",\"/wallpaper/artwork.md\",\"/wallpaper/logo.md\",\"/wallpaper/Content-Creators.md\"]}],\"/line/\":[{\"text\":\"英雄台词语音\",\"collapsible\":false,\"children\":[\"/line/Breach.md\",\"/line/Jett.md\",\"/line/Raze.md\",\"/line/Omen.md\",\"/line/Brimstone.md\",\"/line/Phoenix.md\",\"/line/Sage.md\",\"/line/Sova.md\",\"/line/viper.md\",\"/line/Cypher.md\",\"/line/Reyna.md\",\"/line/Killjoy.md\",\"/line/Skye.md\",\"/line/Agent.md\",\"/line/Astra.md\",\"/line/KAYO.md\",\"/line/chamber.md\",\"/line/neon.md\",\"/line/fade.md\",\"/line/Harbor.md\",\"/line/Gekko.md\",\"/line/Deadlock.md\"]}]},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"英雄\",\"link\":\"/hero/\"},{\"text\":\"画廊\",\"link\":\"/wallpaper/\"},{\"text\":\"地图\",\"link\":\"/maps/Ascent\"},{\"text\":\"其他\",\"children\":[\"/cos/\",\"/recreation/\",\"/line/\",\"/model/\"]},{\"text\":\"视频中心\",\"link\":\"https://v.valfans.com\",\"target\":\"_blank\",\"rel\":\"视频中心\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"contributorsText\":\"Contributors\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
