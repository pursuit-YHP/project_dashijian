$('.tx_zoom').on('mouseenter', function(e) {
    $('.tx_zoom ul').show()
})

$('.tx_zoom').on('click', function(e) {

    $('.tx_zoom ul').hide()
})

$('aside ul>li').on('click', function() {
    $(this).addClass("current").siblings('li').removeClass("current")
    $(this).next('ul').show()
    $(this).siblings('li').next('ul').hide()
})