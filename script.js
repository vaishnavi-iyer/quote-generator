document.addEventListener('DOMContentLoaded', function() {// to make syre script s excuted after DOM is loaded

  // All your code goes here... functions, variables, everything!
  loadQuote();
  document.getElementById('quote-button').addEventListener('click', function(){
    console.log("click detected");
    loadQuote();
  });
});


var thoughts = [
{"quote": "Another world is not only possible, she is on her way. On a quiet day, I can hear her breathing.",
"from": "Arundhati Roy"},
{"quote": "If this is the best of possible worlds, what then are the others?",
"from": "Voltaire"},
{"quote": "Being challenged in life is inevitable, being defeated is optional.",
"from": "Roger Crawford"},
{"quote": "Don't cry because it's over, smile because it happened.",
"from": "Dr Seuss"},
{"quote": "We are all in the gutter, but some of us are looking at the stars.",
"from": "Oscar Wilde"},
{"quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
"from": "Anne Frank"},
{"quote": "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
"from": "Winston Churchill"},
{"quote": "Dwell in possibility",
"from": "Emiily Dickinson"},
{"quote": "Write it on your heart that every day is the best day in the year.",
"from": "Ralph Waldo Emerson"},
{"quote": "You'll never find a rainbow if you're looking down",
"from": "Charlie Chaplin"}
];

var lastQuoteNum, tweetLink;

function loadQuote ()  // function to load a new quote
{
  var quoteNum = Math.floor(Math.random()*(thoughts.length));    /// to generate a random quote number
  if(lastQuoteNum===quoteNum)
    quoteNum++;
  console.log(thoughts[quoteNum])
  $("#quote").empty().append(thoughts[quoteNum].quote);
  $("#from").empty().append(thoughts[quoteNum].from);
  //document.getElementById('quote').innerHTML = thoughts[quoteNum].quote; // using js

  lastQuoteNum = quoteNum

  tweetLink = "https://twitter.com/intent/tweet?hashtags=thoughtoftheday&text=" + thoughts[quoteNum].quote + " - " + thoughts[quoteNum].from;
}