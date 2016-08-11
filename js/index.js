colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]

var currentQuote = '', currentAuthor = '';

function getQuote(){
  
  $.ajax({
    headers : {
      "X-Mashape-Key" : "F0hbUmE4WSmshDBqX8L0imkqIGarp1E5JByjsnnsKn5TCkNpfM",
      "Content-Type" : "application/x-www-form-urlencoded",
      "Accept" : "application/json"
    },
    url : "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    success : function(response){
      var j = JSON.parse(response);
     currentAuthor = j.author;  
     currentQuote = j.quote;
      
      $(".quote-text").animate({
        opacity : 0
      }, 500 , function(){
        $(this).animate({
          opacity : 1
        }, 500 );
        $("#text").text(currentQuote);
      });
      
      $(".quote-author").animate({
          opacity : 0 
      }, 500 , function(){
        $(this).animate({
          opacity : 1
        }, 500 );
        $("#author").html(currentAuthor);
      });
      
    var color = Math.floor(Math.random() * colors.length);
      
     $("html body").animate({
       backgroundColor : colors[color],
       color : colors[color]
     }, 1000);
      
      $(",button").animate({
        color : colors[color]
      });
      
    }
  });
}


$(document).ready(function(){
  getQuote();
  $("#new-quote").on('click', getQuote); 
});