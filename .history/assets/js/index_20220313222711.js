$('.tx_zoom').on('mouseenter', function(e) {
    $('.tx_zoom ul').show()
})

$('.tx_zoom').on('click', function(e) {

    $('.tx_zoom ul').hide()
})

$('aside ul>li').on('click', function() {
    $(this).addClass("current_li").siblings('li').removeClass("current_li")
    $(this).next('ul').toggle()
    $(this).siblings('li').next('ul').hide()
})

$('aside ul ul').children('li').on('click', function() {
    $(this).addClass('current_li').parent().prev().removeClass("current_li")
})

getuserinfo()

function getuserinfo() {
    $.ajax({
        method: 'get',
        url: '/my/userinfo',
        success: function(res) {
            console.log(res.data);
            if (res.status != 0)
                return alert("获取用户信息失败")
            renderavatar(res.data)
        }
    })
}

function renderavatar(data) {
    let username = data.nickname
    if (username == "") {
        username = data.username
    }
    $('.aside_head label').html("欢迎&nbsp;&nbsp" + username)
    console.log(data.user_pic);
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