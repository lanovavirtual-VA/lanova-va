const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).setLocale("hr").toFormat("d. MMMM yyyy.");
  });

  eleventyConfig.addFilter("multiply", (char, n) => String(char).repeat(n));

  eleventyConfig.addFilter("excerpt", (content, length = 160) => {
    const text = String(content).replace(/(<([^>]+)>)/gi, "");
    return text.length > length ? text.slice(0, length).trim() + "…" : text;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
