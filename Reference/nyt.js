$(document).ready(function() {
    // web api calls
    console.log("working");

    function nytSearch() {
        //var key = "yvc3IGWQtcuBMOW6CfGy8WWYQnSbUYt4" 
        var searchTerm = $("#searchTerm").val()
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=yvc3IGWQtcuBMOW6CfGy8WWYQnSbUYt4";
        console.log(queryURL)

        console.log(new Date().getFullYear());

        if (start && start.length == 4 && parseInt(start) <= new Date().getFullYear()) {
            queryURL += `&begin_date=${start}0101`;
        }
        if (end && end.length == 4 && parseInt(end) <= new Date().getFullYear() && parseInt(end) >= parseInt(start)) {
            queryURL += `&end_date=${end}1231`;
        }

        $.ajax({
            url: queryURL,
            method: "GET",

        }).then(function(response) {
            console.log(response)



            var results = response.response.docs

            for (var i = 0; i < results.length; i++) {
                console.log(results[i]);
                //let articleHtml = $("<article>");
                //let headline = $("<h3>").text(article.headline.print_headline || article.headline.main);
                //let dateJs = new Date(article.pub_date)
                //let date = $("<h5>").text(dateJS.toDateString());
                //let summary = $("<p>").text(article.snippet);
                //articleHtml.append(headline, date, summary);
                //$("#articles").append(articleHtml);


            }

        })
    }
    // just for testing real quick got it! still nothing
    $("#search").on("click", function(event) {

        // event.preventDefault(); -- mainly for when the form is used in HTML
        console.log("CLICK");
        nytSearch(
            $("#searchTerm").val().trim(),
            $("#numberOfRecords").val(),
            $("#searchDateBegin").val().trim(),
            $("#searchDateEnd").val().trim()
        );


    })

})