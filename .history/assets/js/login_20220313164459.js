$(function() {
    // 注册链接点击事件
    var regpassword = /^(\w){6,16}$/
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
        let password = $('#login_f [name=password]').val().trim()
        if (username == "" || password == "")
            return alert('请完整输入信息')
        if (regpassword.test(password)) {
            console.log(password);
        }
    })

})