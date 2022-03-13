$(function() {
    // 注册链接点击事件
    var regpassword = /^(\w){6,16}$/ //密码正则表达式
    var rooturl = 'http://www.liulongbin.top:3007'
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
            $.ajax({
                type: "post",
                url: rooturl + "/api/login",
                data: { username: username, password, password },
                success: function(res) {
                    if (res.status != 0)
                        return alert(res.message)
                    alert(res.message)
                    console.log(res);
                }
            })
        }
    })

})