$('.tx_zoom').on('mouseenter', function(e) {
    $('.tx_zoom ul').show()
})

$('.tx_zoom').on('click', function(e) {

    $('.tx_zoom ul').hide()
})

$('aside ul>li').on('click', function() {
    $(this).addClass("current_li").siblings('li').removeClass("current_li")
    $(this).next('ul').show()
    $(this).siblings('li').next('ul').show()
})