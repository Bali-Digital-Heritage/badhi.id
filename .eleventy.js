const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.pathPrefix = "/";

	let markdownLibrary = markdownIt({
		html: true
	  }).use(markdownItAttrs);
	  
	  eleventyConfig.setLibrary("md", markdownLibrary);

    return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};