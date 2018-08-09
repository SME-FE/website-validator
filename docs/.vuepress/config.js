module.exports = {
  base: '/website-validator/',
  title: 'SME Validator',
  theme: 'one',
  description: 'Fast, Lightweight, Flexible Validator.',
  // TODO: add google ana
  // ga: '',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'SME Validator',
      description: 'Fast, Lightweight, Flexible Validator.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'SME Validator',
      description: 'Fast, Lightweight, Flexible Validator.'
    }
  },
  themeConfig: {
    repo: 'SME-FE/validator-core',
    docsRepo: 'SME-FE/website-validator',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'Guide',
            link: '/guide/install-and-usage'
          }
        ],
        sidebar: [
          {
            title: 'Guide',
            children: [
              '/guide/install-and-usage',
              '/guide/rules',
              '/guide/logical-operators'
            ]
          },
          {
            title: 'Advanced',
            children: [
              '/advanced/use-with-ruleset',
              '/advanced/check-more-than-one-field'
            ]
          },
          '/api'
        ]
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text: '主页',
            link: '/zh/README',
          },
          {
            text: '教程',
            link: '/zh/guide/install-and-usage'
          }
        ],
        sidebar: [
          {
            title: 'Guide',
            children: [
              '/zh/guide/install-and-usage',
              '/zh/guide/rules',
              '/zh/guide/logical-operators'
            ]
          },
          {
            title: 'Advanced',
            children: [
              '/zh/advanced/use-with-ruleset',
              '/zh/advanced/check-more-than-one-field'
            ]
          },
          '/zh/api'
        ]
      }
    }  
  }
}