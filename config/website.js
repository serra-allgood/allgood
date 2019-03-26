const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "It's (Serra) Allgood", // Navigation and Site Title
  siteTitleAlt: 'Serra Allgood', // Alternative Site title for SEO
  siteTitleShort: 'Allgood', // short_name for manifest
  siteHeadline: 'Get to know the (pretty plain) mind of a self-taught software engineer', // Headline for schema.org JSONLD
  siteUrl: 'https://serra.allgood.dev', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Personal site for Serra Allgood',
  author: 'Serra Allgood', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@allgoodserra', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-136587104-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
