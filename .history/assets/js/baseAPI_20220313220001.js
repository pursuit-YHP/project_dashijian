// 在每次执行ajax请求之前, 都会执行ajaxPrefilter(option)函数,option就是发起请求传递的配置项,
// 我们可以通过修改option.url来配置根路径
$.ajaxPrefilter(function(option) {
    // console.log(option.url);
    option.url = "http://www.liulongbin.top:3007" + option.url
    if (option.url.indexOf("my"))
})