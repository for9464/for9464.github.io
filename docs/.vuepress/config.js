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
      description: '||',
      circle: true, // 是否为圆形头像
    },
    navbar: [
      { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
      { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
    ]
  }),
  
  bundler: viteBundler(),
})