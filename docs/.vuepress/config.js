module.exports = {
  title: 'Its VuePress',
  description: 'Just playing around',

  permalink: ":slug", //* i_day, month  /:year/:i_month/:day/:slug 
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
        text: 'hey',
        link: '/hey/'
      },
      {
        text: 'link',
        link: '/sub/under/'
      },
      {
        text: 'form',
        link: '/sub/form/'
      }
    ] 
  }
}