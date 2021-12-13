$(document).ready(function () {
    $('#fadeOut').click(function(){
        $('#caja').fadeOut(4000);
    })
    
    $('#fadeIn').click(function(){
        $('#caja').fadeIn(4000);
    })
    $('#fadeTog').click(function(){
        $('#caja').fadeToggle(4000);
    })

    $('#slideDown').click(function(){
        $('#caja2').slideDown(3000);
    })

    $('#slideUp').click(function(){
        $('#caja2').slideUp(3000);
    })

    $('#slideTog').click(function(){
        $('#caja2').slideToggle(3000);
    })
});
