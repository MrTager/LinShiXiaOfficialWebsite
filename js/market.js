
var mySwiper = new Swiper ('.swiper-container', {

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView : 3,
    spaceBetween : 20,
    pagination: {
        el: '.swiper-pagination',
    },

})


var count=0;
var count1=0;
var count2=0;
var count3=0;
var count4=0;
var count5=0;
var count6=0;
var count7=0;
var count8=0;
var count9=0;
var count10=0;
var count11=0;
var count12=0;
var count13=0;

function func(a,b,c,d,e,f,g) {
    $(a).animate({top:b},1);
    $(a).animate({top:c},500);
    $(a).animate({top:d},200);
    $(a).animate({top:e},150);
    $(a).animate({top:f},100);
    $(a).animate({top:g},50);
}

if(count==0&&($('#animOne').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animOne', '100px', '-30px', '30px', '-15px','5px','0px');
    count++
}
if(count1==0&&($('#animTwo').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animTwo', '100px', '-30px', '30px', '0px','5px','0px');
    count1++
}
if(count2==0&&($('#animThree').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animThree', '100px', '-30px', '30px', '0px','5px','0px');
    count2++
}
if(count3==0&&($('#animFour').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animFour', '100px', '-30px', '30px', '0px','5px','0px');
    count3++
}
if(count4==0&&($('#tboxRightSmallBox').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#tboxRightSmallBox', '100px', '-30px', '30px', '0px','5px','0px','5px','0px');
    count4++
}
if(count5==0&&($('#lboxLeft').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#lboxLeft', '100px', '-30px', '30px', '0px','5px','0px');
    count5++
}
if(count6==0&&($('#animFive').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animFive', '100px', '-30px', '30px', '0px','5px','0px');
    count6++
}
if(count7==0&&($('#animSix').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animSix', '100px', '-30px', '30px', '0px','5px','0px');
    count7++
}
if(count8==0&&($('#animSeven').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animSeven', '100px', '-30px', '30px', '0px','5px','0px');
    count8++
}
if(count9==0&&($('#animEight').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animEight', '100px', '-30px', '30px', '0px','5px','0px');
    count9++
}
if(count10==0&&($('#animNine').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animNine', '100px', '-30px', '30px', '0px','5px','0px');
    count10++
}
if(count11==0&&($('#animTen').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animTen', '100px', '-30px', '30px', '0px','5px','0px');
    count11++
}
if(count12==0&&($('#animEleven').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animEleven', '100px', '-30px', '30px', '0px','5px','0px');
    count12++
}
if(count13==0&&($('#animTwele').offset().top- $(window).scrollTop()<$(window).height())) {
    func('#animTwele', '100px', '-30px', '30px', '0px','5px','0px');
    count13++
}

$(window).on('scroll',function () {
    if(count==0&&($('#animOne').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animOne', '100px', '-30px', '30px', '-15px','5px','0px');
        count++
    }
    if(count1==0&&($('#animTwo').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animTwo', '100px', '-30px', '30px', '0px','5px','0px');
        count1++
    }
    if(count2==0&&($('#animThree').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animThree', '100px', '-30px', '30px', '0px','5px','0px');
        count2++
    }
    if(count3==0&&($('#animFour').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animFour', '100px', '-30px', '30px', '0px','5px','0px');
        count3++
    }
    if(count4==0&&($('#tboxRightSmallBox').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#tboxRightSmallBox', '100px', '-30px', '30px', '0px','5px','0px','5px','0px');
        count4++
    }
    if(count5==0&&($('#lboxLeft').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#lboxLeft', '100px', '-30px', '30px', '0px','5px','0px');
        count5++
    }
    if(count6==0&&($('#animFive').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animFive', '100px', '-30px', '30px', '0px','5px','0px');
        count6++
    }
    if(count7==0&&($('#animSix').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animSix', '100px', '-30px', '30px', '0px','5px','0px');
        count7++
    }
    if(count8==0&&($('#animSeven').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animSeven', '100px', '-30px', '30px', '0px','5px','0px');
        count8++
    }
    if(count9==0&&($('#animEight').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animEight', '100px', '-30px', '30px', '0px','5px','0px');
        count9++
    }
    if(count10==0&&($('#animNine').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animNine', '100px', '-30px', '30px', '0px','5px','0px');
        count10++
    }
    if(count11==0&&($('#animTen').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animTen', '100px', '-30px', '30px', '0px','5px','0px');
        count11++
    }
    if(count12==0&&($('#animEleven').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animEleven', '100px', '-30px', '30px', '0px','5px','0px');
        count12++
    }
    if(count13==0&&($('#animTwele').offset().top- $(window).scrollTop()<$(window).height())) {
        func('#animTwele', '100px', '-30px', '30px', '0px','5px','0px');
        count13++
    }

})



