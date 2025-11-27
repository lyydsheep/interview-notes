import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '面试八股文',
  description: '技术面试题库 - MySQL、Redis、操作系统等',
  lang: 'zh-CN',
  
  // 主题配置
  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: 'MySQL', link: '/mysql/' },
      { text: 'Redis', link: '/redis/' },
      { text: '操作系统', link: '/os/' },
      { text: '简历', link: '/resume/' }
    ],

    // 侧边栏
    sidebar: {
      '/mysql/': [
        {
          text: 'MySQL 面试题',
          collapsed: false,
          items: [
            { text: '首页', link: '/mysql/' },
            { text: '一、SQL 基础与范式', link: '/mysql/#一sql-基础与范式' },
            { text: '二、存储引擎与数据类型', link: '/mysql/#二存储引擎与数据类型' },
            { text: '三、索引（重点）', link: '/mysql/#三索引重点' },
            { text: '四、事务（重中之重）', link: '/mysql/#四事务重中之重' },
            { text: '五、锁机制', link: '/mysql/#五锁机制' },
            { text: '六、日志系统', link: '/mysql/#六日志系统' },
            { text: '七、性能优化', link: '/mysql/#七性能优化' },
            { text: '八、高可用与扩展', link: '/mysql/#八高可用与扩展' },
            { text: '九、综合与思考题', link: '/mysql/#九综合与思考题' }
          ]
        }
      ],
      '/redis/': [
        {
          text: 'Redis 面试题',
          collapsed: false,
          items: [
            { text: '首页', link: '/redis/' },
            { text: '敬请期待...', link: '/redis/' }
          ]
        }
      ],
      '/os/': [
        {
          text: '操作系统面试题',
          collapsed: false,
          items: [
            { text: '首页', link: '/os/' },
            { text: '敬请期待...', link: '/os/' }
          ]
        }
      ],
      '/resume/': [
        {
          text: '简历制作教程',
          collapsed: false,
          items: [
            { text: '首页', link: '/resume/' }
          ]
        }
      ]
    },

    // 页面右侧大纲
    outline: {
      label: '本页目录',
      level: 'deep'
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyydsheep/interview-notes' }
    ],

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/lyydsheep/interview-notes/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    // 文档版本提示
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 大纲配置
    returnToTopLabel: '返回顶部'
  },

  // Markdown 增强
  markdown: {
    lineNumbers: true,
    toc: { level: 1 },
    config: (md) => {
      // 可以添加 Markdown 插件
    }
  },

  // 构建配置
  vite: {
    server: {
      port: 3000,
      open: true
    }
  }
})
