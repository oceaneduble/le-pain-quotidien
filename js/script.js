jQuery(document).ready(function(){
    $('.navTitle,.navdrop').mouseover(function(){
        $('.navdrop').css({"top":"0px"});
        $('.logopain').css({"z-index":"40"});
    });
    $('.navTitle, .navdrop').mouseout(function(){
        $('.navdrop').css({"top":"-400px"});
        $('.logopain').css({"z-index":"40000"});
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > $('#topcontainer').offset().top - 40 ){
            $('.animNav, .navdrop, .dropdown-item, .dropdown-menu').css({"background-color":"#fff9e8"});
            $('.textnav, .mobilenav, .fa-bars, .iconnav').css({"color":"black"});
            $('.logopain').css({"position":"fixed","top":"-20px","z-index":"4000"});
        } else {
            $('.animNav, .navdrop, .dropdown-item, .dropdown-menu').css({"background-color" : "black"});
            $('.textnav, .mobilenav, .fa-bars, .iconnav').css({"color":"#fff9e8"});
            $('.logopain').css({"position":"absolute","top":"auto"});
        }
    });

    $('#trouvezunlpq-button').click(function () {
        $('#trouvezunlpq-button').css({"display":"none"});
        $('#trouvezunlpq-input-show').css({"display":"block"});
    });
});