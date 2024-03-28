// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://praveenmanchi.art/', // Replace with your website URL
    changefreq: 'daily', // Update frequency for sitemap entries
    priority: 0.7, // Priority for sitemap entries
    siteMap: {
      path: 'sitemap.xml', // Path to the sitemap file
      lastmod: new Date().toISOString().slice(0, 10), // Date of last modification
    },
    generateRobotsTxt: true, // Generate robots.txt file
  };