module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css/fonts");
  
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
