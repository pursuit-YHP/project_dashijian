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
        let username = $('#login_f [name=username]').val().trim()
        let password = $('#login_f [name=username]').val().trim()





        // console.log($(this).serialize());






        // fd.append(params)
        // console.log(fd)
        // console.log(params);
    })

})