var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

setTimeout(function() {
  // Add the rest of your code here, as we have to wait a moment before the document has jQuery as a part of it.
  $("body").html("<h2>It Works!</h2>");
}, 1000);