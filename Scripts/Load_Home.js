function load_home(){
    datavote= "id="+2;
    $.ajax({
        url: "./Pages/Home",
        type: "GET",
        data: "datavote",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        beforeSend:function(data){
            $('.all').html('<div class="moodloader"><img src="Images/mood.gif"><img src="Images/loader.gif" class="loading"></div>')
        },

        success:function(para2){
            $('.all').html(para2);
        },

        error:function(data){
            alert('Failed to process');
        }
    });
};
setTimeout(load_home, 1);