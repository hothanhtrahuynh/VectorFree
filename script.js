function getDataShowCase() {
    $.ajax({
        url: "https://api.jsonbin.io/b/5f3c5d1db88c04101cf6c576/latest",
        method: "GET",
        headers: {
            "secret-key": "$2b$10$8HeR0GU8TH/AvQ6splSD8.r2/MrQNemmjlu6pRc5w26az30ZEXMQS"
        },
        success: function(res) {
            renderDataShowCase(res);
        },
        error: function(err) {
            console.log(err);
        }
    })
}

function renderDataShowCase(data) {
    var html = "";
    for (let i = 0; i < data.length; i++) {
        html += '<div class="responsive">' +
            '<div class="gallery">' +
            '<figure>' +
            '<div class="img">' +
            '<img class="img-main" src="' + data[i].image + '" alt="" width="600" height="400">' +
            '<figcaption>' +
            '<div class="text">' +
            '<p class="title">' + data[i].title + '</p>' +
            '<span class="avatar">' +
            '<img class="loaded" src="' + data[i].avatar + '" alt="freepik">' +
            '</span>' +
            '<span class="name">' + data[i].name + '</span>' +
            '<div class="status">' +
            '<i class="fas fa-download">' + data[i].download + '</i>' +
            '<i class="far fa-heart">' + data[i].heart + '</i>' +
            '</div></div></figcaption></div></figure></div></div>';

    }

    $('.showcase .container-fluid .row').html(html);
}

function getDataBlog() {
    $.ajax({
        url: "https://api.jsonbin.io/b/5f3f8790514ec5112d0ab2b5/latest",
        method: "GET",
        headers: {
            "secret-key": "$2b$10$8HeR0GU8TH/AvQ6splSD8.r2/MrQNemmjlu6pRc5w26az30ZEXMQS"
        },
        success: function(res) {
            renderDataBlog(res);
        },
        error: function(err) {
            console.error(err);
        }
    })

}


function renderDataBlog(data) {
    var html = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].symbol == "") {
            html += '<div class="swiper-slide"> <div class="card">' + '<figure>' +
                '<a href="./Detailpage.html?id=' + data[i].id + ' "target="_blank">' +
                '<img src="' + data[i].image + '" alt="">' +
                '</a>  </figure></div><br></div>';
        } else {
            html += '<div class="swiper-slide"> <div class="card">' + '<img src="' + data[i].image + '" alt="">' +
                '<div class="card-body">' +
                '<a href="#" class="text-symbol">' + data[i].symbol + '</a>' +
                '<h2 class="text-state">' +
                '<a href="./Detailpage.html?id=' + data[i].id + '" target="_blank">' + data[i].state + '</a>' +
                '</h2>' +
                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<p class="font-sm">' +
                '<a>' + data[i].footer + '</a>' + data[i].time +
                '</p> </div></div></div></div><br></div>';
        }
    }
    $('.blog.overflow-hidden .swiper-wrapper').html(html);
}

/* function renderData(data) {
    var html = '<img src=' + data.mainimage + ' alt=""></img>';
    $('.content-wrapper .wrapper .row .col-md-12.col-xl-8 .card .main-image').html(html);

     html = '<a href="#">' + data.title + '</a>';
     $('.content-wrapper .wrapper .row .col-md-12.col-xl-8 .card .card-body .text-state').html(html);

     html = 'By <a>' + data.symbol + '.</a>' + data.time;
     $('.content-wrapper .wrapper .row .col-md-12.col-xl-8 .card .card-body .row .font-sm').html(html);

     html = '<img src="' + data[i].timeline - image + '">';
     $('.freebies .timeline-image').html(html);

     var str = data.text;
     html = '<p>' + str.replace('+', '</p><p>') + '</p>';
     $('.content-wrapper .wrapper .row .col-md-12.col-xl-8 .card .card-body .insert').html(html);
     /* Cap nhat co cac latest post ben phai*/
/* html = "";

     html += '<article class="post">' +
         '<div class="card aside-card">' +
         '<div class="row"><img src="' + data.aside - image1 + '"><div class="card-body">' +
         '<a href="#" class="text-symbol">' + data.aside - title1 + '</a><h6 class="text-state">' +
         '<a href="#">' + data.aside - content1 + '</a>' +
         '</h6> </div>  </div> </div> </article>';
     html += '<article class="post">' +
         '<div class="card aside-card">' +
         '<div class="row"><img src="' + data.aside - image2 + '"><div class="card-body">' +
         '<a href="#" class="text-symbol">' + data.aside - title2 + '</a><h6 class="text-state">' +
         '<a href="#">' + data.aside - content2 + '</a>' +
         '</h6> </div>  </div> </div> </article>';
     html += '<article class="post">' +
         '<div class="card aside-card">' +
         '<div class="row"><img src="' + data.aside - image3 + '"><div class="card-body">' +
         '<a href="#" class="text-symbol">' + data.aside - title3 + '</a><h6 class="text-state">' +
         '<a href="#">' + data.aside - content3 + '</a>' +
         '</h6> </div>  </div> </div> </article>';
     $('.col-md-12.col-xl-4 .col-xl-12.col-md-6.col-12 .latest.post').append(html);
    
} */