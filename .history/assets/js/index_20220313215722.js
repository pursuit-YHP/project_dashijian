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
    console.log($(this).parent().prev());
    $(this).addClass('current_li').parent().prev().removeClass("current_li")
})