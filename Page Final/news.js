$(document).ready(function () {
    //var url = 'https://newsapi.org/v2/everything?q=hpv&language=en&apiKey=8c2e107ceae84471984fa6953948cee5';
    var url = 'news/everything.json';
    $.getJSON(url, function (res) {
        //console.log(res);
        const newsArray = res.articles.slice().sort((a, b) => dateToNum(b.publishedAt) - dateToNum(a.publishedAt));
        console.log(newsArray);
        if (newsArray.length > 0) {
            var s = "";
            s += "<div class='row'>";
            if (newsArray.length > 12) {
                s = loadNews(newsArray.slice(0, 12), s);
            }
            else {
                s = loadNews(newsArray, s);
            }
            s += "</div>";
            $('#news').html(s);
        }
        else {
            $('.news').html(`<h4>sorry</h4>`);
        }
    })
});


function dateToNum(d) {
    d = d.replaceAll('-', '').replaceAll(":", "").replace("T", "").replace("Z", "");
    return Number(d);
}

function changeDateFormat(d) {
    d = d.replace("Z", "").split("T");
    var theNewDate = d[0].split("-").reverse().join("/");
    var theNewTime = d[1];
    return theNewDate + ' ' + theNewTime;
}


function loadNews(newsArray, element) {
    for (var i = 0; i < newsArray.length; i++) {
        var newsTitle = newsArray[i].title;
        if (newsTitle.length > 60) {
            newsTitle = newsTitle.substr(0, 60) + '...';
        }

        element += "<div class='col-md-4' style='height:300px'>";
        element += '<div style="width: 100%;height:65%">';
        // s += `<a href="${newsArray[i].url}"><img src=${newsArray[i].urlToImage} alt="logo" style="width: 100%;height:95%"></a>`;
        element += `<a style="color:black" href="#foo" onclick="window.open('${newsArray[i].url}', '_blank', 'width=1000, height=800')"><img src=${newsArray[i].urlToImage} alt="logo" style="width: 100%;height:95%">`;
        element += "</div>";
        element += `<h7>${newsTitle}<br><b>Datetime</b>: ${changeDateFormat(newsArray[i].publishedAt)}</h7>`;
        // s += `<p>${newsArray[i].title}</p>`;
        element += "</div>";
    }
    return element;
}

