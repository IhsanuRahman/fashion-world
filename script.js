

var imgLink = [
    'https://img.freepik.com/free-photo/full-shot-woman-online-fashion-shopping_23-2150460083.jpg?w=826&t=st=1694163221~exp=1694163821~hmac=b72bbeaf8cde795b006fc1fe71eba787b8c18234e797f87c2d31434bf83c8b0e ',
    'https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?size=626&ext=jpg&ga=GA1.2.5292792.1694162747&semt=ais',
     'https://img.freepik.com/free-photo/top-view-accessoires-travel-with-women-clothing-concept-white_1921-107.jpg?size=626&ext=jpg&ga=GA1.2.5292792.1694162747&semt=ais',
     'https://img.freepik.com/free-photo/cutout-grunge-nobody-new-up-bright_1428-741.jpg?size=626&ext=jpg&uid=R115893415&ga=GA1.2.5292792.1694162747&semt=ais',    
    ]
var i=0
$(".banner").attr('src',imgLink[i])
var scrollContainer = document.querySelectorAll(".list");

scrollContainer.forEach(element => element.addEventListener("wheel", (evt) => {
    
    evt.preventDefault();
    element.scrollLeft += evt.deltaY;

}));

$("#arrow-button-left").on('click',function () {
  
    console.log(h)
         i--
    if(i<0){
        i=imgLink.length-1
    }
    $(".banner").attr('src',imgLink[i])
    
   
    
})
var ts;
$('.banner').on('touchstart', function (e){
   ts = e.originalEvent.touches[0].clientY;
});

$('.banner').on('touchend', function (e){
   var te = e.originalEvent.changedTouches[0].clientY;
   if(ts > te+5){
      i--
   }else if(ts < te-5){
    i++
   }if (i<0) {
        i=imgLink.length-1
    }else if (i>=imgLink.length) {
        i=0
    }

   $(".banner").attr('src',imgLink[i])
});


document.querySelector('.banner').addEventListener("wheel", (evt) => {
    evt.preventDefault();
    console.log(evt.deltaY);
    if (evt.deltaY<0) {
        i--
    }else if(evt.deltaY>0){
        i++
    }
    if (i<0) {
        i=imgLink.length-1
    }else if (i>=imgLink.length) {
        i=0
    }

   $(".banner").attr('src',imgLink[i])

})

$(".banner").on('click',function () {
    console.log('hai');
})
$("#arrow-button-right").on('click',function () {
    i++
    if (i>=imgLink.length) {
        i=0
    }
    $(".banner").attr('src',imgLink[i])
})
$('#search').on('click', function () {
    $('.header').css('opacity', '1')
    $('.main').css('opacity', '1')
    $('#searchings').toggle()
})



$('.main').on("click", function () {
    var isvis = $('.drower').is(':visible')
    if (isvis) {
        $('.drower').toggle();
        $('.main').css('opacity', '1');
    }
})



$("#search-bt").on("click", function () {

    $('#searchings').toggle()
    $('.header').css('opacity', '0.1')
    $('.main').css('opacity', '0.1')

})
$(".account").on('click', function () {
    $('.drower').toggle();
    $('.main').css('opacity', '0.6');
})



