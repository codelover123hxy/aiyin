const path = require("path")
const resolve = dir => path.join(__dirname, dir)
const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
	transpileDependencies: true,
	// 基本路径
	publicPath: "./",
	// 输出文件目录(默认dist)
	outputDir: "aiyin",
	// 关闭eslint验证
	lintOnSave: false,
	// 静态目录代理
	chainWebpack: config => {
		config.resolve.alias
			.set("@", resolve("src"))
			.set("@components", resolve("src/components"))
			.set("@assets", resolve("src/assets"))
			.set("@image", resolve("src/assets/image"))
			.set("@view", resolve("src/view"))
	}
})
