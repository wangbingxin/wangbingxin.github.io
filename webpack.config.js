var path=require("path");
var ExtractTextPlugin=require("extract-text-webpack-plugin");

module.exports={
	entry:{
		"LoginBundle/Login":"./src/Login/app.js",
		"RegisterBundle/Register":"./src/Register/app.js"
	},
	output:{
		path:path.join(__dirname,"./web/build"),
		filename:"[name].bundle.js",
		publicPath:"build"
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
				loader:"babel-loader",
				query:{
					"presets":["latest"]
				}
			},
			{
				test:/\.png|jpg/,
				loader:"url-loader",
				query:{
					limit:8192,
					name:"imgs/[name].[ext]"
				}
			}
		]
	},
	plugins:[
		new ExtractTextPlugin("[name].bundle.css")
	]
}