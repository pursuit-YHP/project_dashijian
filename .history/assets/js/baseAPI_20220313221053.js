// 在每次执行ajax请求之前, 都会执行ajaxPrefilter(option)函数,option就是发起请求传递的配置项,
// 我们可以通过修改option.url来配置根路径
$.ajaxPrefilter(function(option) {
    // console.log(option.url);
    option.url = "http://www.liulongbin.top:3007" + option.url
    if (option.url.indexOf("/my/") != -1) {
        option.Headers = {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI'
        }
    }
})