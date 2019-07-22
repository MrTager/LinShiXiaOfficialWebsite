
var count=0;
var countTwo=0;
var countThree=0;
var countFour=0;

function func(a,b,c,d,e) {

            $(a).animate({left:b},1);
            $(a).animate({left:c},400);
            $(a).animate({left:d},200);
            $(a).animate({left:e},200);
          /*  switch (y){
                case 1:
                    count++;
                    break;
            }*/

}

if(count==0&&($('#centerImg1').offset().top- $(window).scrollTop()<$(window).height()))
{
    func("#centerImg1", "-500px", "50px", "-50px", "0px");
    count++;
}

if(countTwo==0&&($('#centerImg2').offset().top- $(window).scrollTop()<$(window).height())) {
    func("#centerImg2", "-500px", "50px", "-50px", "0px");
    countTwo++;
}
if(countThree==0&&($('#centerTxt1').offset().top- $(window).scrollTop()<$(window).height())) {
    func("#centerTxt1", "1000px", "450px", "550px", "500px");
    countThree++
}

if(countFour==0&&($('#centerTxt2').offset().top- $(window).scrollTop()<$(window).height())) {
    func("#centerTxt2", "1000px", "450px", "550px", "500px");
    countFour++
}

$(window).on('scroll',function () {

    if(count==0&&($('#centerImg1').offset().top- $(window).scrollTop()<$(window).height()))
    {
        func("#centerImg1", "-500px", "50px", "-50px", "0px");
        count++;
    }

    if(countTwo==0&&($('#centerImg2').offset().top- $(window).scrollTop()<$(window).height())) {
        func("#centerImg2", "-500px", "50px", "-50px", "0px");
        countTwo++;
    }
    if(countThree==0&&($('#centerTxt1').offset().top- $(window).scrollTop()<$(window).height())) {
        func("#centerTxt1", "1000px", "450px", "550px", "500px");
        countThree++
    }

    if(countFour==0&&($('#centerTxt2').offset().top- $(window).scrollTop()<$(window).height())) {
        func("#centerTxt2", "1000px", "450px", "550px", "500px");
        countFour++
    }

});
