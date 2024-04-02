console.log("Eleventy is using this configuration file.");

module.exports = function(eleventyConfig) {

    // Add a readable date formatter filter to Nunjucks
    // eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"))
  
    // Add a HTML timestamp formatter filter to Nunjucks
    // eleventyConfig.addFilter("htmlDateDisplay", require("./filters/timestamp.js"))
  
    // eleventyConfig.addLayoutAlias('default', 'layouts/base.njk')
  
    // Include our static assets
    eleventyConfig.addPassthroughCopy({'src/assets/fonts': 'assets/fonts'});
    eleventyConfig.addPassthroughCopy({'src/assets/img': 'assets/img'});
    eleventyConfig.addPassthroughCopy({'src/assets/js': 'assets/js'});
    eleventyConfig.addPassthroughCopy('src/favicons');
    eleventyConfig.addPassthroughCopy('src/robots.txt');
  
    return {
      templateFormats:        ['md', 'njk'],
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine:     'njk',
      passthroughFileCopy:     true,
  
      dir: {
        input:    'src',
        includes: '_includes',
        layouts:  '_includes/layouts'
      }
    }
  }