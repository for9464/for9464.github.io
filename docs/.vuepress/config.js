import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  title: '沙漠渔夫',
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  theme: plumeTheme({
    // more...
    avatar: {
      url: 'https://q1.qlogo.cn/g?b=qq&nk=2099311682&s=100',
      name: 'only9464',
      description: '',
      circle: true, // 是否为圆形头像
    },
    navbar: [
      { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
      { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
      { text: '友情链接', link: '/friends/', icon: 'material-symbols:link' },
    ],
    plugins: {
      comment: {
        // 服务提供商
        provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        // 是否默认启用评论
        comment: true,
  
        // 其它配置，根据服务提供商进行配置
        // ...
        repo: "for9464/for9464.github.io.comment",
        repoId: 'R_kgDOL8dHzQ', 
        category: 'General', 
        categoryId: 'DIC_kwDOL8dHzc4CfaCB', 
      },
      // watermark: {
      //   watermarkOptions: {
      //     content: '自定义文字',
      //     fontColor: '#fff', // 文字颜色
      //   }
      // }
      // search: {
      //   // more options
      // },
      // docsearch: {
      //   // more options
      //   appId: 'YOUR_APP_ID', 
      //   apiKey: 'YOUR_API_KEY', 
      //   indexName: 'YOUR_INDEX_NAME', 
      // },
      // encrypt: {//废弃
      //   // 部分加密
      //   rules: {
      //     // // 可以是 md 文件的相对路径，对该文件加密
      //     // '前端/基础.md': '123456',
      //     // // 可以是 文件夹的路径，对该目录下所有文章加密
      //     // '/notes/vuepress-theme-plume/': '123456',
      //     // // 可以是 访问地址的请求路径，对该访问路径下所有文章加密
      //     // '/vuepress-theme-plume/': '123456',
      //     // // 可以是 具体的某个页面的请求路径，对该页面加密
      //     // '/article/f8dnci3/': '123456',
      //     // // 如果是 `^` 开头，则匹配该正则表达式的页面也会加密
      //     // '^/(a|b)/': '123456',

      //     // dirsearch
      //     // '/article/ve530z8f/': '123456',
      //   }
      // },
    },
  }),

  bundler: viteBundler(),
})