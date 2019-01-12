/* eslint-env node */

/**************************
 * @file: webpack配置
 * @author: leinov
 * @date: 2018-10-08
 * @update: 2018-11-04 优化html文件
 * 1.修改htmlConfig.js
 * 2.在页面文件夹下添加pageinfo.json
 ***************************/

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css分离打包
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//js压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //css压缩
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
//主配置
module.exports = (env, argv) => ({
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "build"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader:"babel-loader",
					options:{
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							//{"plugins": ["@babel/plugin-proposal-class-properties"]} //这句很重要 不然箭头函数出错
						], 
					}
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|css)$/, //css打包 路径在plugins里
				use: [
					argv.mode == "development" ? { loader: "style-loader"} :MiniCssExtractPlugin.loader,
					{ loader: "css-loader", options: { url: false, sourceMap: true } },
					{ loader: "sass-loader", options: { sourceMap: true } }
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg)$/,
				loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]",
				options:{
					publicPath:"/"
				}
			},
		],
	},
	devServer: {
		port: 3100,
		open: true,
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			filename:"index.html",
			template:"./src/tpl.html"
		}),
		new MiniCssExtractPlugin({ //分离css插件
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
	optimization: {
		minimizer: [//压缩js
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false
			}),
			new OptimizeCSSAssetsPlugin({})
		],
		splitChunks: { //压缩css
			cacheGroups: {
				styles: {
					name: "styles",
					test: /\.css$/,
					chunks: "all",
					enforce: true
				}
			}
		}
	}
});
