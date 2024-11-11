const { EleventyI18nPlugin } = require("@11ty/eleventy");

const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./_data/");

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.pathPrefix = "/";

  let markdownLibrary = markdownIt({
    html: true,
  }).use(markdownItAttrs);

  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en", // Required, this site uses "en"
		// Rename the default universal filter names
		filters: {
			// transform a URL with the current page’s locale code
			url: "locale_url",

			// find the other localized content for a specific input file
			links: "locale_links",
		},

		// When to throw errors for missing localized content files
		errorMode: "strict", // throw an error if content is missing at /en/slug
		// errorMode: "allow-fallback", // only throw an error when the content is missing at both /en/slug and /slug
		// errorMode: "never", // don’t throw errors for missing content
  });

  return {
    dir: {
      input: "src",
      output: "public",
	  data: "_data"
    },
  };
};
