$('.tx_zoom').on('mouseenter', function(e) {
    $('.tx_zoom ul').show()
})

$('.tx_zoom').on('mouseleave', function(e) {
    $('.tx_zoom ul').hide()
})

$('aside ul>li').on('mouseenter', function() {
    $(this).children('ul').show()
})