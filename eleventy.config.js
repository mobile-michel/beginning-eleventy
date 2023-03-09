const pluginNavigation = require("@11ty/eleventy-navigation");
const { format } = require('date-fns');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css/fonts");
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addFilter("readableDate", dateObj => {
    const postdate = format(dateObj, 'do MMMM, yyyy');
    return postdate;
  });
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    const htmlDate = format(dateObj, 'yyyy-LL-dd');
    return htmlDate;
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_includes/layouts",
      data: "_data",
      includes: "_includes"
    },
    templateFormats: ["md", "liquid", "njk"],
    passthroughFileCopy: true
  };
};
