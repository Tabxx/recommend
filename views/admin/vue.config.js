module.exports = {
    baseUrl: './',
    outputDir: 'html', // 输出目录
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                ws: false
            }
        }
    },
    filenameHashing: false, // 打包是否生成哈希值
    productionSourceMap: false, //
}