// the following code allows the user to see the product that he liked

$(function() 
    {$("#wishlist1").click(function() {
      $("#wishlist-1").css("opacity", "1");
      $("#wishlist-1").css("visibility", "visible");
      $("#wishlist1").css("backgroundColor", "rgb(191, 103, 154)");
    });
});

$(function() 
    {$("#wishlist2").click(function() {
      $("#wishlist-2").css("opacity", "1");
      $("#wishlist-2").css("visibility", "visible");
      $("#wishlist2").css("backgroundColor", "rgb(191, 103, 154)");
    });
});

$(function()    
    {$("#wishlist3").click(function() {
      $("#wishlist-3").css("opacity", "1");
      $("#wishlist-3").css("visibility", "visible");
      $("#wishlist3").css("backgroundColor", "rgb(191, 103, 154)");
    });
});
$(function()    
    {$("#wishlist4").click(function() {
      $("#wishlist-4").css("opacity", "1");
      $("#wishlist-4").css("visibility", "visible");
      $("#wishlist4").css("backgroundColor", "rgb(191, 103, 154)");
    });
});
$(function()    
    {$("#wishlist5").click(function() {
      $("#wishlist-5").css("opacity", "1");
      $("#wishlist-5").css("visibility", "visible");
      $("#wishlist5").css("backgroundColor", "rgb(191, 103, 154)");
    });
});
$(function()    
    {$("#wishlist6").click(function() {
      $("#wishlist-6").css("opacity", "1");
      $("#wishlist-6").css("visibility", "visible");
      $("#wishlist6").css("backgroundColor", "rgb(191, 103, 154)");
    });
});
$(function()    
    {$("#wishlist7").click(function() {
      $("#wishlist-7").css("opacity", "1");
      $("#wishlist-7").css("visibility", "visible");
      $("#wishlist7").css("backgroundColor", "rgb(191, 103, 154)");
    });
});
$(function()    
    {$("#wishlist8").click(function() {
      $("#wishlist-8").css("opacity", "1");
      $("#wishlist-8").css("visibility", "visible");
      $("#wishlist8").css("backgroundColor", "rgb(191, 103, 154)");
    });
});
$(function()    
    {$("#wishlist9").click(function() {
      $("#wishlist-9").css("opacity", "1");
      $("#wishlist-9").css("visibility", "visible");
      $("#wishlist9").css("backgroundColor", "rgb(191, 103, 154)");
    });
});



// for count total amound of chosen bouquets

window.onload = function (){
  var item = document.querySelectorAll ('.fa-plus');
  var res = document.querySelector('.res_shop');
    for (var i = 0; i < item.length; i++) {
      item[i].onclick = function(){
        this.classList.toggle('active');
          res.innerHTML = calc();
      }
    }
    function calc(){
      var sum = 0;
        for(var i = 0; i < item.length; i++){
          if (item[i].classList.contains('active')){
            sum += parseInt(item[i].getAttribute('data-price'));
            }
          }
          return sum;
        }
}