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
                url: rooturl + "/api/login",
                data: { username: username, password, password },
                success: function(res) {
                    if (res.status != 0)
                        return alert(res.message)
                    alert(res.message)
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
                url: rooturl + "/api/reguser",
                data: { username: username, password, password },
                success: function(res) {
                    if (res.status != 0)
                        return alert(res.message)
                    alert(res.message)
                    $('#login_f').
                }
            })
        }
    })
})