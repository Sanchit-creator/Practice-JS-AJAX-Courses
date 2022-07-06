$('button').click(function() {
    $.get('https://codingninjas.in/api/v3/courses', function(data) {
        let course = data.data.courses;
        for (let courses of course) {
            $('body').append('<div class="container-2" > <div class="div"><img src = "' +courses.preview_image_url+ '"><p>' +courses.brief_intro+'</p><h4>' +courses.level+ '</h4></div>');
        }
        
    })
    $('.container').remove();
})