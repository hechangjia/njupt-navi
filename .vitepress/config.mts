import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "content",


  head: [['link', { rel: 'icon', href: '/njupt-navi.hechangjia.cn/favicon.ico' }]],

  base: '/njupt-navi.hechangjia.cn/',
  lang: 'zh-CN',
  title: "njupt-survival-guide",
  description: "njupt-survival-guide: a site designed for NJUPTer",

  markdown: {
    math: true,


  },



  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hechangjia' }
    ]
  }
})
