const pluginBookshop = require("@bookshop/eleventy-bookshop");
const pluginCloudCannonBookshop = require("@bookshop/cloudcannon-eleventy-bookshop");

module.exports = function (eleventyConfig) {

	eleventyConfig.addPlugin(pluginBookshop({
		bookshopLocations: ["component-library"]
	}));
	eleventyConfig.addPlugin(pluginCloudCannonBookshop);

	eleventyConfig.addPassthroughCopy('site/assets');
	eleventyConfig.addPassthroughCopy('site/_cloudcannon');

	return {
		dir: {
			input: 'site',
			pages: 'pages'
		}
	}
};
