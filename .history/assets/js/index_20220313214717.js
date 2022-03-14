$('.tx_zoom').on('mouseenter', function(e) {
    $('.tx_zoom ul').show()
})

$('.tx_zoom').on('click', function(e) {

    $('.tx_zoom ul').hide()
})

$('aside ul>li').on('mouseenter', function() {
    console.log($(this).next());
    $(this).children('ul').show()
})