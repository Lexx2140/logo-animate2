$(function() {

    var $svg = $('#animDiv>svg').drawsvg({
        duration: 10000,
        callback: function() {
            animate();
        }
    });

    function animate() {

        $('#animDiv>svg').fadeOut('2000', function() {
            $('#path1').add('#path2').addClass('hidden');

            $('#animDiv>svg').fadeIn('100', function() {
                $svg.drawsvg('animate');
                FillLogo();
            });
        });
    }

    setTimeout(animate, 3500);
});

function FillLogo() {

    $('#path1').css({
        'fill-opacity': '1',
        'transition': 'fill-opacity 3s',
        'transition-delay': '3s'
    });

    $('#path2').css({
        'fill-opacity': '1',
        'transition': 'fill-opacity 3s',
        'transition-delay': '4s'
    });
}