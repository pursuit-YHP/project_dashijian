$(function() {
    // 注册链接点击事件
    location.replace(location.href)
    var regpassword = /^(\w){6,16}$/ //密码正则表达式
        // var rooturl = 'http://www.liulongbin.top:3007' //根路径

    // 去注册按钮点击事件
    $('#login_a').on('click', function() {
        $('.login').hide()
        $('.reg').show()
    })

    // 去登录按钮点击事件
    $('#reg_a').on('click', function() {
            $('.reg').hide()
            $('.login').show()
        })
        // 登录链接点击事件

    // 登录事件
    $('#login_f').on('submit', function(e) {
        e.preventDefault()
        let username = $('#login_f [name=username]').val().trim()
        let password = $('#login_f [name=password]').val().trim()
        if (username == "" || password == "")
            return alert('请完整输入信息')
        if (regpassword.test(password)) {
            $.ajax({
                type: "post",
                url: "/api/login",
                data: $(this).serialize(),
                success: function(res) {
                    if (res.status != 0)
                        return alert(res.message)
                    alert(res.message)
                    localStorage.setItem('token', res.token) //将服务器发回的token存到本地存储
                    $('#login_f [name=username]').val("")
                    $('#login_f [name=password]').val("")
                    location.href = '/index.html' //跳转到首页
                }
            })
        }
    })

    // 注册事件
    $('#reg_f').on('submit', function(e) {
        e.preventDefault()
        let username = $('#reg_f [name=username]').val().trim()
        let password = $('#reg_f [name=password]').val().trim()
        if (username == "" || password == "")
            return alert('请完整输入信息')
        if (password != $('#reg_f [name=passwords]').val().trim())
            return alert("密码不一致")
        if (regpassword.test(password)) {
            $.ajax({
                type: "post",
                url: "/api/reguser",
                data: { username: username, password, password },
                success: function(res) {
                    if (res.status != 0)
                        return alert(res.message)
                    alert(res.message)
                    $('#reg_a').click()
                }
            })
        }
    })
})