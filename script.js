document.addEventListener('DOMContentLoaded', function() {// to make syre script s excuted after DOM is loaded

  // All your code goes here... functions, variables, everything!
  loadQuote();
});
var thoughts = [
{"quote": "fhjgfhkhjgkjhkj",
"from": "ghfghjfghjf"},
{"quote": "fhjgfhkhjgkjhkj",
"from": "ghfghjfghjf"},
{"quote": "fhjgfhkhjgkjhkj",
"from": "ghfghjfghjf"},
{"quote": "fhjgfhkhjgkjhkj",
"from": "ghfghjfghjf"}

];
function loadQuote ()  // function to load a new quote
{
  var quoteNum = Math.floor(Math.random()*(thoughts.length));    /// to generate a random quote number

  console.log(thoughts[quoteNum])
  $("#quote").empty().append(thoughts[quoteNum].quote);
  $("#from").empty().append(thoughts[quoteNum].from);

  //document.getElementById('quote').innerHTML = thoughts[quoteNum].quote; // using js
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

