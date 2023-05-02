const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')
const navlinks1 = document.querySelector('.menu-btn')

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu');
    navlinks1.classList.toggle('i');
})


function myFunction(x) {
    if (x.matches) { // If media query matches


    $('.home').on('click', function(){
        data10= "id="+11;
        $.ajax({
            url: "./Pages/Home",
            type: "GET",
            data: "data10",
            contentType : false,
            cache : false,
            processData:false,
            crossDomain: true,

            beforeSend:function(data){
                $('.All_Page').html('<div class="moodloader"><img src="Images/mood.gif"><img src="Images/loader.gif" class="loading"></div>');
            },

            success:function(para2){
                $('.all').html(para2);
            },

            error:function(data){
                alert('Unable to process request. Please check that your internet connection is stable and try again.');
            }
        });
        navlinks.classList.toggle('mobile-menu');
        navlinks1.classList.toggle('i');
    });

    $('.projects').on('click', function(){
        data10= "id="+10;
        $.ajax({
            url: "./Pages/Projects",
            type: "GET",
            data: "data10",
            contentType : false,
            cache : false,
            processData:false,
            crossDomain: true,

            beforeSend:function(data){
                $('.All_Page').html('<div class="moodloader"><img src="Images/mood.gif"><img src="Images/loader.gif" class="loading"></div>');
            },

            success:function(para2){
                $('.all').html(para2);
            },

            error:function(data){
                alert('Unable to process request. Please check that your internet connection is stable and try again.');
            }
        });
        navlinks.classList.toggle('mobile-menu');
        navlinks1.classList.toggle('i');
    });

    $('.about').on('click', function(){
        data10= "id="+10;
        $.ajax({
            url: "./Pages/About",
            type: "GET",
            data: "data10",
            contentType : false,
            cache : false,
            processData:false,
            crossDomain: true,

            beforeSend:function(data){
                $('.All_Page').html('<div class="moodloader"><img src="Images/mood.gif"><img src="Images/loader.gif" class="loading"></div>');
            },

            success:function(para2){
                $('.all').html(para2);
            },

            error:function(data){
                alert('Unable to process request. Please check that your internet connection is stable and try again.');
            }
        });
        navlinks.classList.toggle('mobile-menu');
        navlinks1.classList.toggle('i');
    });

    $('.contacts').on('click', function(){
        data10= "id="+10;
        $.ajax({
            url: "./Pages/Contacts",
            type: "GET",
            data: "data10",
            contentType : false,
            cache : false,
            processData:false,
            crossDomain: true,

            beforeSend:function(data){
                $('.All_Page').html('<div class="moodloader"><img src="Images/mood.gif"><img src="Images/loader.gif" class="loading"></div>');
            },

            success:function(para2){
                $('.all').html(para2);
            },

            error:function(data){
                alert('Unable to process request. Please check that your internet connection is stable and try again.');
            }
        });
        navlinks.classList.toggle('mobile-menu');
        navlinks1.classList.toggle('i');
    });

    }else{
        $('.home').on('click', function(){
            data10= "id="+11;
            $.ajax({
                url: "./Pages/Home",
                type: "GET",
                data: "data10",
                contentType : false,
                cache : false,
                processData:false,
                crossDomain: true,
        
                beforeSend:function(data){
                    $('.All_Page').html('<div class="moodloader"><img src="Images/mood.gif"><img src="Images/loader.gif" class="loading"></div>');
                },
        
                success:function(para2){
                    $('.all').html(para2);
                },
        
                error:function(data){
                    alert('Unable to process request. Please check that your internet connection is stable and try again.');
                }
            });
        });

        $('.projects').on('click', function(){
            data10= "id="+10;
            $.ajax({
                url: "./Pages/Projects",
                type: "GET",
                data: "data10",
                contentType : false,
                cache : false,
                processData:false,
                crossDomain: true,
        
                beforeSend:function(data){
                    $('.All_Page').html('<div class="moodloader"><img src="Images/mood.gif"><img src="Images/loader.gif" class="loading"></div>');
                },
        
                success:function(para2){
                    $('.all').html(para2);
                },
        
                error:function(data){
                    alert('Unable to process request. Please check that your internet connection is stable and try again.');
                }
            });
        });
        
        $('.about').on('click', function(){
            data10= "id="+10;
            $.ajax({
                url: "./Pages/About",
                type: "GET",
                data: "data10",
                contentType : false,
                cache : false,
                processData:false,
                crossDomain: true,
        
                beforeSend:function(data){
                    $('.All_Page').html('<div class="moodloader"><img src="Images/mood.gif"><img src="Images/loader.gif" class="loading"></div>');
                },
        
                success:function(para2){
                    $('.all').html(para2);
                },
        
                error:function(data){
                    alert('Unable to process request. Please check that your internet connection is stable and try again.');
                }
            });
        });
        
        $('.contacts').on('click', function(){
            data10= "id="+10;
            $.ajax({
                url: "./Pages/Contacts",
                type: "GET",
                data: "data10",
                contentType : false,
                cache : false,
                processData:false,
                crossDomain: true,
        
                beforeSend:function(data){
                    $('.All_Page').html('<div class="moodloader"><img src="Images/mood.gif"><img src="Images/loader.gif" class="loading"></div>');
                },
        
                success:function(para2){
                    $('.all').html(para2);
                },
        
                error:function(data){
                    alert('Unable to process request. Please check that your internet connection is stable and try again.');
                }
            });
        });
    };
}
var x = window.matchMedia("(max-width: 750px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes