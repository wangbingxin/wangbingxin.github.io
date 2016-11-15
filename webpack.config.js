const path=require("path");
const ExtractTextPlugin=require("extract-text-webpack-plugin");

module.exports={
	entry:"./src/entry.js",
	output:{
		path:path.join(__dirname,"./web/build"),
		filename:"app.bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:"vue"
			},
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract("style-loader","css-loader")
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:"babel",
				query:{
					"presets":["latest"]
				}
			}
		]
	},
	resolve:{
		alias:{
			"vue":"vue/dist/vue.js"
		}
	},
	plugins:[
		new ExtractTextPlugin("app.bundle.css")
	]
}