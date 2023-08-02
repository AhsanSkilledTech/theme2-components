$(document).ready(function() {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 400) {
            $(".header").addClass("sticky animated fadeInDown");
        } else {
            $(".header").removeClass("sticky animated fadeInDown");
        }

    })
    // sticky header end
    // language toggle start
    if (document.dir == "ltr") {
        $('.english').hide();
        $('.arabic').show();
    } else if (document.dir == "rtl") {
        $('.english').show();
        $('.arabic').hide();
    }
    $('.arabic').click(function() {
        $('html').attr('dir', 'rtl');
        $('body').addClass('rtl').removeClass('ltr');
        $('.arabic').hide();
        $('.english').show();
        localStorage.setItem('rtl', 'true');
    });
    $('.english').click(function() {
        $('html').attr('dir', 'ltr');
        $('body').addClass('ltr').removeClass('rtl');
        $('.english').hide();
        $('.arabic').show();
        localStorage.removeItem('rtl');
    });
    if (localStorage.getItem('rtl') === 'true') {
        $('.arabic').hide();
        $('.english').show();
        $('body').addClass('rtl').removeClass('ltr');
        $('html').attr('dir', 'rtl');
    }
    // language toggle end
    // dark theme toggle start
    $('.lightoff').click(function() {
        $('body').addClass('dark');
        localStorage.setItem('darkClass', 'true');
    });
    $('.lighton').click(function() {
        $('body').removeClass('dark');
        localStorage.removeItem('darkClass');
    });
    if (localStorage.getItem('darkClass') === 'true'){
        $('body').addClass('dark');
    }
    if (window.screen.width < 1024) {
    
        $(".nvbtn").click(function() {
            $(".hdrnavLst").addClass("active");
        });
        $(".hdrnavLst-closebtn").click(function() {
            $(".hdrnavLst").removeClass("active");
        });
        $("body").click(function(){
            $(".hdrnavLst").removeClass("active");
        })
        $(".nvbtn, .hdrnavLst").click(function(event) {
            event.stopPropagation();
        });
    }
});
