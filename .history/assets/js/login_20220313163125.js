$(function() {
    // 注册链接点击事件
    $('#login_a').on('click', function() {
        $('.login').hide()
        $('.reg').show()
    })
    $('#reg_a').on('click', function() {
            $('.reg').hide()
            $('.login').show()
        })
        // 登录链接点击事件

    // 提交事件
    $('#login_f').on('submit', function(e) {
        e.preventDefault()
        console.log($(this)[0]);
        var fd = new FormData($(this)[0])
        console.log(fd);






        // fd.append(params)
        // console.log(fd)
        // console.log(params);
    })

})