module.exports = {
  title: 'Its VuePress',
  description: 'Just playing around',

  permalink: "/:year/:i_month/:day/:slug", //* i_day, month
  themeConfig: {
    // logo: '/assets/img/logo.png',
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      },
      {
        text: 'link',
        link: '/sub/under/'
      }
    ]
  }
}