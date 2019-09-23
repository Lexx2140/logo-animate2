
$(function() {


    var $svg = $('#myLogo').drawsvg({
            duration: 5000,
            easing: 'linear',
            callback: function() {
                animate();
            }
        });

    function animate() {
        $svg.drawsvg('animate');
    }

    animate();

});

function FillLogo() {

    $('.fill1').css({visibility: 'visible'}).animate({
            opacity: '1'
        },
        3000,
        function() {});
}