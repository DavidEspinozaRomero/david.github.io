const { dirname } = require('path')
const path = require('path')

module.exports = {
	mode:"develop",
	entry: "./app/entry",
	output: {
		path:path.resolve(__dirname, "dev")
	}
	filename: "movile.js",
	publicPath:"/assets/"
},
module: {
	rules: [
		{
			test:/\.jsx$/,
			include:[
				path.resolve(__dirname, "app")
			],
			exclude:[
				path.resolve(__dirname, "app/demo-files")
			],
			loader: "babel-loader",
			options: {
				presets: ["es2015"]
			},
		}
	]
}