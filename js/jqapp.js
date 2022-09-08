$(document).ready(function(){
    // console.log('hay')


// Start navbars

//nav icon ko cross X phyit ag lote
// for navbutton
    $('.navbuttons').click(function(){
        // console.log('hay')
        $('.navbuttons').toggleClass('changes');
    })


//scroll swel yin
// for navbar 
    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();
        // console.log(getscrolly)

        if(getscrolly >= 200){
            $('.navbar').addClass('navmenus');
        }else{
            $('.navbar').removeClass('navmenus');
        }
    });


// End navbar

// Start Mission Section  //scroll swel mha animation win ag
    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();
        // console.log(getscrolly);

        if(getscrolly >= 650){
            $('.cameraimgs').addClass('fromlefts');
            $('.missiontexts').addClass('fromrights');
        }else{
            $('.cameraimgs').removeClass('fromlefts');
            $('.missiontexts').removeClass('fromrights');
        }
    });
// End Mission Section 


// Start Gallery Section 

    $('.gallerylists').click(function(){
        let datafilter = $(this).attr('data-filter');
        // console.log(datafilter); 
        if(datafilter === "all"){
            $('.filters').show(300);
        }else{
            $('.filters').not('.' + datafilter).hide(300);

            $('.filters').filter('.' + datafilter).show(300);
        }
    });


// remove current active item 
    $('.gallerylists').click(function(){
        $(this).addClass('activeitems').siblings().removeClass('activeitems');
    });

// End Gallery Section 

//Start Pricing Section 
    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();
        // console.log(getscrolly)
        if(getscrolly >= 4300){
            $('.cardones').addClass('movefromlefts');
            $('.cardtwos').addClass('movefrombottoms');
            $('.cardthrees').addClass('movefromrights');
        }else{
            $('.cardones').removeClass('movefromlefts');
            $('.cardtwos').removeClass('movefrombottoms');
            $('.cardthrees').removeClass('movefromrights');
        }
    })
// End Pricing Section 


// Start Footer Section 
    const showyear = document.getElementById('showyear');
    const getfullyear = new Date().getFullYear();
    showyear.textContent = getfullyear;
// End Footer Section
});