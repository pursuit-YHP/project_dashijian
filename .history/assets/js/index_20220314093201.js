// 获取用户信息（渲染用户名和头像）
getuserinfo()

//给个人中心添加触摸事件
$('.tx_zoom').on('mouseenter', function(e) {
    $('.tx_zoom ul').show()
})
$('.tx_zoom').on('mouseleave', function(e) {
    $('.tx_zoom ul').hide()
})


// 给侧边导航栏的每个li添加绑定事件
$('aside ul>li').on('click', function() {
    $(this).addClass("current_li").siblings('li').removeClass("current_li")
    $(this).next('ul').toggle()
    $(this).siblings('li').next('ul').hide()
})

$('aside ul ul').children('li').on('click', function() {
    $(this).addClass('current_li').parent().prev().removeClass("current_li")
})

$('.unlogin').on('click', function() {
    localStorage.removeItem('token')
    location.replace('./login.html')
    location.href = './login.html'
})



//获取用户信息
function getuserinfo() {
    $.ajax({
        method: 'get',
        url: '/my/userinfo',
        success: function(res) {
                if (res.status != 0)
                    return
                renderavatar(res.data)
            }
            // complete（）无论获取数据成功或失败都会执行的函数。
    })
}
//渲染用户信息
function renderavatar(data) {
    let username = data.nickname
    if (username == "") {
        username = data.username
    }
    $('.aside_head label').html("欢迎&nbsp;&nbsp" + username)
    if (!data.user_pic) {
        $('.default_ava').html(username[0])
        $('.default_ava').show()
        $('.user_ava').hide()


    } else {
        $('.user_ava').show()
        $('.user_ava').css('backGround', 'url(' + data.user_pic + ') no-repeat center')
        $('default_ava').hide()
    }
}