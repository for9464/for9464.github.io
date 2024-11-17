import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  { text: '分类', link: '/blog/categories/' },
  {
    text: '笔记',
    items: [{ text: 'Android', link: '/notes/Android/README.md' },
      { text: 'Linux', link: '/notes/Linux/README.md' },
    ]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  { text: 'Categories', link: '/en/blog/categories/' },
  {
    text: 'Notes',
    items: [{ text: 'Android', link: '/en/notes/Android/README.md' },
      { text: 'Linux', link: '/en/notes/Linux/README.md' },
    ]
  },
])

