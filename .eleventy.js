const { imageShortcode } = require('./src/plugins/eleventyImage');
const embedEverything = require("eleventy-plugin-embed-everything");

module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPassthroughCopy("src/assets/");

  // Elventy Plugins
  eleventyConfig.addPlugin(embedEverything);

  // Eleventy Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  // Add a custom 'posts' collection
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/post/**/*.{md,html,njk}");
  });

  eleventyConfig.addCollection("popular", function (collectionApi) {
    return collectionApi.getAll().filter((post) => post.data.popular);
  });

  // Create a  filter named 'excerpt' which is used to create excerpts
  // Note: White spaces are removed. (like lines & paragraphs). Be carefull
  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 300)) + "...";
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
