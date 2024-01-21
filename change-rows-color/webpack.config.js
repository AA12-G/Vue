const path = require('path')    //导入node.js 中专门操作路径的模块。

// 1.导入 html-webpack-plugin 这个插件，得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')

//2.new 构造函数，创建插件的实例对象
const htmlPlugin=new HtmlPlugin({
    //指定要复制到哪个页面
    template:'./src/index.html',
    //指定复制出来的文件名和存放路径
    filename:'./index.html'
})

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//使用node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    //代表webpack的运行模式，可选值有两个：developmet 和 production
    mode:'development',
    //保证运行时报错的行数和源代码的行数一致
    devtool: 'nosources-eval-source-map',
    //entry:'指定要处理哪个文件'
    entry:path.join(__dirname,'./src/index.js'),//打包入口文件的路径
    output:{
        path:path.join(__dirname,'./dist'),//输出文件的存放路径
        filename:'bundle.js' //文件的名字
    },
    //3.插件的数组，将来webpack在运行时，会加载并调用这些插件
    plugins:[htmlPlugin,new CleanWebpackPlugin],

    devServer:{
        //首次打包成功后，自动打开浏览器
        open:true,
        //在http协议中，如果端口号是80，则可以被省略
        port:8848,
        //指定运行的主机地址
        host:'localhost'
    },
    
    module:{  //所有第三方文件模块的匹配规则
        rules:[ //文件后缀的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            //处理.less 文件的loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //处理图片的loader
            {test:/\.jpg|png|gif$/,use:'url-loader'}
        ]
    }
}