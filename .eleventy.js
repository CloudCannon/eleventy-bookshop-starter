const pluginBookshop = require("@bookshop/eleventy-bookshop");

module.exports = function (eleventyConfig) {

	eleventyConfig.htmlTemplateEngine = "liquid";

	eleventyConfig.addPlugin(pluginBookshop({
		bookshopLocations: ["component-library"],
		pathPrefix: ""
	}));

	eleventyConfig.addPassthroughCopy('site/assets');
	eleventyConfig.addPassthroughCopy('site/_cloudcannon');

	return {
		dir: {
			input: 'site',
			pages: 'pages'
		}
	}
};
