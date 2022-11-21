const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPassthroughCopy("src/assets/");

  return {
    dir: {
      input: "src",
    },
  };
};
