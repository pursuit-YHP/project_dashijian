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
        URL: '/my/userinfo',
        success: function(res) {
            if (res.status != 0)

                renderavatar(res)
        }
    })
}

function renderavatar(res) {
    alert('11')
    if (res.nickname)
        $('aside_head label').html("欢迎&nbsp;&nbsp" + res.nickname)
    else
        $('aside_head label').html("欢迎&nbsp;&nbsp" + res.username)
}