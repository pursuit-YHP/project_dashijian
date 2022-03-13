$(function() {
    alert("11")
        // 注册链接点击事件
    $('#login_a').on('click', function() {
        $(this).hide()
        $('#reg_a').show()
    })
    $('#reg_a').on('click', function() {
            $(this).hide()
            $('#login_a').show()
        })
        // 登录链接点击事件

})