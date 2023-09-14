

var imgLink = [
    'assets/banner1.avif',
    'assets/banner3.avif',
     'assets/banner2.avif',
     'assets/banner4.avif',    
    ]
var i=0
$(".banner").attr('src',imgLink[i])
// var watchSection = document.querySelectorAll(".list");

// watchSection.forEach(element => element.addEventListener("wheel", (evt)  =>{
    
//     evt.preventDefault();
//      element.scrollLeft += evt.deltaY;

// }));


var h = $('.header').height();
document.getElementById("main").addEventListener("wheel", (evt) => {
   
    
    if (evt.deltaY<0) {
       $(".header").css('top' , "0");
    }else if(evt.deltaY>0){
    $(".header").css('top' ,"-60px");
    }
   

},{passive:true})
$('#close-bt-searchings').on('click',function(){
    $('.header').css('opacity', '1')
    $('.main').css('opacity', '1')
    $('#searchings').toggle()       
})
$('#close-bt-drower').on('click',function(){
        $('.drower').toggle();
        $('.main').css('opacity', '1');
})
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



