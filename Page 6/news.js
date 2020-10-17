$(document).ready(function () {
    //var url = 'https://newsapi.org/v2/everything?q=hpv&language=en&apiKey=8c2e107ceae84471984fa6953948cee5';
    var url = 'news/everything.json';
    $.getJSON(url, function (res) {
        console.log(res);
        if (res.articles.length > 0) {
            var s = "";
            s += "<div class='row'>";
            if (res.articles.length > 12) {
                for (var i = 0; i < 12; i++) {
                    s += "<div class='col-md-4' style='height:300px'>";
                    s += '<div style="width: 100%;height:70%">';
                    // s += `<a href="${res.articles[i].url}"><img src=${res.articles[i].urlToImage} alt="logo" style="width: 100%;height:95%"></a>`;
                    s += `<a style="color:black" href="#foo" onclick="window.open('${res.articles[i].url}', '_blank', 'width=1000, height=800')"><img src=${res.articles[i].urlToImage} alt="logo" style="width: 100%;height:95%">`;
                    s += "</div>";
                    s += `<h6>${res.articles[i].title}</h6></a>`;
                    s += "</div>";
                }
            }
            else {
                for (var i = 0; i < res.articles.length; i++) {
                    s += "<div class='col-md-4' style='height:350px'>";
                    s += '<div style="width: 100%;height:70%">';
                    s += `<a style="color:black" href="#foo" onclick="window.open('${res.articles[i].url}', '_blank', 'width=1000, height=800')"><img src=${res.articles[i].urlToImage} alt="logo" style="width: 100%;height:95%">`;
                    s += "</div>";
                    s += `<h6>${res.articles[i].title}</h6></a>`;
                    s += "</div>";
                }
            }
            s += "</div>";

            $('#news').html(s);
        }
        else {
            $('.news').html(`<h4>sorry</h4>`);
        }
    })


});