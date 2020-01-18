//array to hold buttons values
var topics = [
    "Ellen Ripley",
    "Dwayne Hicks",
    "Xenomorph",
    "Arthur Dallas",
    "Dennis Parker",
    "Samuel Brett",
    "Joan Lambert",
    "Big Chap",
    "Xenomorph",
    "a bean",

];

//looping the array to append the buttons to the html
for (var i = 0; i < topics.length; i++) {
    var buttons = $('<button data-gif="' + topics[i] + '">' + topics[i] + '</button>')
    buttons.appendTo("#buttonDiv");
};

//clicking a button catches the value of that button
$("button").on("click", function() {
    var thisGIF = $(this).attr("data-gif");
    console.log("click")
    console.log(thisGIF)
    //inserts the value of the button clicked into a giphy search query
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisGIF + "&api_key=8S6m8Ed7pFQS1y8sTnybvoCJPvAbRWYW&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        var results = response.data;
        console.log(response)

        for (var j = 0; j < results.length; j++) {

            var gifDiv = $("<div>");

            var rating = results[j].rating;

            var p = $("<p>").text("Rating: " + rating);

            var gifStill = $("<img>");
            gifStill.attr("src", results[j].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(gifStill);

            $("#gif-Feed").prepend(gifDiv);
            console.log(gifDiv)
            

        }
    });


})

// $("img").on("click", function() {
//     var thisIMG = $(this).attr("src")
// })