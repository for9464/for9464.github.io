import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: 'https://q1.qlogo.cn/g?b=qq&nk=2099311682&s=100' }]],
  locales: {
    '/': {
      title: 'only9464',
      lang: 'zh-CN',
      description: '',
    },
    '/en/': {
      title: 'only9464',
      lang: 'en-US',
      description: '',
    },
  },

  bundler: webpackBundler(),

  theme: plumeTheme({
    contributors: {
      mode: 'block',
    },
    changelog: {
      maxCount: 10,
      repoUrl: 'https://github.com/for9464/for9464.github.io',
      commitUrlPattern: ':repo/commit/:hash',
    },
    // 添加您的部署域名
    hostname: 'blog.mioe.me',

    plugins: {
      comment: {
        provider: 'Giscus', // "Artalk“ | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: 'for9464/for9464.github.io', 
        repoId: 'R_kgDONQozUQ', 
        category: 'Announcements', 
        categoryId: 'DIC_kwDONQozUc4CkWLV', 
        reactionsEnabled: true,
      },
      search: {
        // more options
      },
      docsearch: {
        // more options
      },
      git: true,
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
           // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ['shell', 'bash', 'typescript', 'javascript'],
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        gfm: true,
        vPre: true,
        breaks: true,
        linkify: true,
        align: true,
        attrs: true,
        sup: true,
        sub: true,
        footnote: true,
        mark: true,
        spoiler: true,
        tasklist: true,
        component: true,
        markmap: true,
        plantuml: true,
        // kotlinPlayground: true,
        // vuePlayground: true,
        sandpack: true,
        
        demo: true,
        include: true,
        chart: true,
        echarts: true,
        mermaid: true,
        flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        pdf: true,
        caniuse: true,
        plot: true,
        bilibili: true,
        youtube: true,
        icons: true,
        codepen: true,
        replit: true,
        codeSandbox: true,
        jsfiddle: true,
        repl: {
          go: true,
          rust: true,
          kotlin: true,
        },
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },
  }),
})
