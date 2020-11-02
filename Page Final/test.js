var tt = document.getElementById("news").outerHTML;
//console.log(tt);

var ourRequest = new XMLHttpRequest()
ourRequest.open('GET', 'news.html');
ourRequest.onload = function () {
    var tte = ourRequest.responseText;
    console.log(tte);
};

ourRequest.send();