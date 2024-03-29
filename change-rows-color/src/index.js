// 1.使用ES6导入语法，导入jQuery
import $ from 'jquery'

//导入样式（在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用）
import './css/index.css'
import './css/index.less'

//1.导入图片，得到图片文件
import logo from './images/logo.jpg'
//2.给img标签的src动态赋值
$('.box').attr('src',logo)

//2.定义Jquery的入口函数
$(function(){
    //3.实现奇偶数行变色
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','blue')
})