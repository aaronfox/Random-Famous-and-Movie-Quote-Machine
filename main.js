var famOrMov = "famous";

// see https://market.mashape.com/andruxnet/random-famous-quotes
function getNewQuote() {
$.ajax({ 
  url : "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=" + famOrMov, 
  headers: {"X-Mashape-Key": "wfCzrNcRT4msh2qGHhfQd1TWRRnUp1j3dNGjsnwBjxmBI3HcD8", "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"},
   success: function(result) { 
     var allJSON = JSON.parse(result);
     var quoteString = allJSON.quote;
     globalQuote = quoteString;
     var firstWords = quoteString.substring(0, quoteString.lastIndexOf(" "));
     /* Obtain the last word so we can make sure to wrap
     the last word with the font awesome right quote */
     var lastWord = quoteString.substring(quoteString.lastIndexOf(" "));
       $(".quote").html("<i class=\"fa fa-quote-left\" style=\"font-size: 18px\"></i> " + firstWords + "<span style=\"white-space: nowrap\">" + lastWord + " <i class=\"fa fa-quote-right\"></i></span>");
       $(".quotee").html(" - " + allJSON.author); 
    updateTweet(quoteString + " - " + allJSON.author + " #RandomQuoteMachine");
   }, 
   error: function(result) { 
     //handle the error 
   } 
 });
};

function updateTweet (stringToChange) {
  $("a").attr("href", "https://www.twitter.com/intent/tweet?text=" + encodeURIComponent(stringToChange));
};

function famousOrMovie() {
  console.log("PLS");
  if (famOrMov == "famous") {
    famOrMov = "movies";
     $(".famous-or-movie").html("Famous");
    $("#fam-or-movie").html("movie");
  }
  else {
    famOrMov = "famous";
    $(".famous-or-movie").html("Movie");
    $("#fam-or-movie").html("famous");
  }
};

$(document).ready(function() {
  getNewQuote();
  $(".new-quote-btn").on("click", getNewQuote);
  $('.famous-or-movie').on("click", famousOrMovie);
});
