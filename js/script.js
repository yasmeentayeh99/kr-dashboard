$(function () {
    $('form').submit(function (e) {

        $('form input').each(function () {
            if ($(this).val() == '') {
                e.preventDefault();
                $(this).css('border', '1px solid #f00');
                $('span').show();
            } else {
                $(this).css('border', '1px solid #eee');
                $('span').hide();
            }
        })

    });

    $('#popup-open').click(function () {
        $('.popup-wrapper').fadeIn();
    });

    $('.popup-close').click(function () {
        $('.popup-wrapper').fadeOut();
    });

    $('.menu-toggle').click(function () {
        $(this).find('i').toggleClass('fa-chevron-left');
        $(this).find('i').toggleClass('fa-chevron-right');

        $('.menu-wrapper').toggleClass('active');
    })

    $('.fa-eye-slash').click(function () {
        $(".in").attr('type', 'text');
        $(this).hide(); 
        $('.fa-eye').show();
        
     });
     $('.fa-eye').click(function () {
        $(".in").attr('type', 'password');
        $(this).hide(); 
        $('.fa-eye-slash').show();
     });
 

});
