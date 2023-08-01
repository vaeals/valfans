import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
export default {
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'keywords', content: 'valorant,无畏契约,瓦罗兰特,插画,语音,模型,二创,地图,cosplay'}]
    ],
    lang: 'zh-CN',
    title: '瓦粉 - 无畏契约资料站',
    description: '瓦粉是无畏契约粉丝资料库，由爱好者维护，提供原画，语音，模型，介绍等一系列服务。',
    plugins: [
        searchPlugin({
            placeholder: '搜索',
            maxSuggestions:10,
        }),
    ],
    theme: defaultTheme({
        logo: '/images/logo.svg', //logo
        sidebarDepth:2,// 侧边栏显示深度
        editLink:false,//编辑此页开关
        editLinkText:'编辑此页',//编辑此页文字
        lastUpdated:false,//更新时间开关
        lastUpdatedText:'更新时间：', //更新时间
        contributors:false, //贡献者
        notFound:['404 - 错误地址！','走错了，回去吧!','来到了一片遗失之地!','进入了虚无空间!',],//404文字
        backToHome:'返回首页',//返回首页文字
        colorModeSwitch:true,
        sidebar: {//侧边栏
            '/hero/': [{
                text: '英雄介绍与解析',
                collapsible: false,//侧边栏折叠
                children: [
                    '/hero/Breach.md',
                    '/hero/Jett.md',
                    '/hero/Raze.md',
                    '/hero/Omen.md',
                    '/hero/Brimstone.md',
                    '/hero/Phoenix.md',
                    '/hero/Sage.md',
                    '/hero/Sova.md',
                    '/hero/viper.md',
                    '/hero/Cypher.md',
                    '/hero/Reyna.md',
                    '/hero/Killjoy.md',
                    '/hero/Skye.md',
                    '/hero/Agent.md',
                    '/hero/Astra.md',
                    '/hero/KAYO.md',
                    '/hero/chamber.md',
                    '/hero/neon.md',
                    '/hero/fade.md',
                    '/hero/Harbor.md',
                    '/hero/Gekko.md',
                    '/hero/Deadlock.md',                    
                ],},],
            '/maps/':[{
                text:'地图详解与鉴赏',
                children:[
                '/maps/Ascent.md',
                '/maps/Bind.md',
                '/maps/Breeze.md',
                '/maps/Fracture.md',
                '/maps/Haven.md',
                '/maps/Icebox.md',
                '/maps/Lotus.md',
                '/maps/Pearl.md',
                '/maps/Split.md',
                ]
            }],
            '/wallpaper/':[{
                text:'官方画廊',
                children:[
                '/wallpaper/',
                '/wallpaper/wallpapers.md',
                '/wallpaper/videos.md',
                '/wallpaper/Screenshots.md',
                '/wallpaper/artwork.md',
                '/wallpaper/logo.md',
                '/wallpaper/Content-Creators.md',

        ]}],
        '/line/': [{
            text: '英雄台词语音',
            collapsible: false,//侧边栏折叠
            children: [
                '/line/Breach.md',
                '/line/Jett.md',
                '/line/Raze.md',
                '/line/Omen.md',
                '/line/Brimstone.md',
                '/line/Phoenix.md',
                '/line/Sage.md',
                '/line/Sova.md',
                '/line/viper.md',
                '/line/Cypher.md',
                '/line/Reyna.md',
                '/line/Killjoy.md',
                '/line/Skye.md',
                '/line/Agent.md',
                '/line/Astra.md',
                '/line/KAYO.md',
                '/line/chamber.md',
                '/line/neon.md',
                '/line/fade.md',
                '/line/Harbor.md',
                '/line/Gekko.md',
                '/line/Deadlock.md',
                    
            ],},],
        },
        navbar: [//导航菜单
        {text: '首页',link: '/'},
        {text: '英雄',link: '/hero/'},
        {text: '画廊',link: '/wallpaper/'},
        {text: '地图',link: '/maps/Ascent'},
        {text: '其他',children: ['/cos/', '/recreation/','/line/','/model/'],},
        {text: '视频中心', link: 'https://v.valfans.com', target:"_blank", rel:'视频中心' },
        //{text: '官网', link: 'https://val.qq.com/', target:"_blank", rel:'游戏官网' },
        //{text: '游戏下载', link: 'https://val.qq.com/download.html', target:"_blank", rel:'Valorant下载' },
    ],}),}