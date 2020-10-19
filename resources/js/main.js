function closeMenu(){
    document.getElementById('navbar').style.height = "0";
};

function openMenu(){
    document.getElementById('navbar').style.height = "100vh";
}

$(function(){
    $('.menu-item a, .header-text-box a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500)
    })
});

var mixer = mixitup('.portfolio-grid-container');