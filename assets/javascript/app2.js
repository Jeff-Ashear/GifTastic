//array to hold buttons values
var topics = [
    "Ellen Ripley",
    "Ash",
    "Thomas Kane",
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
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisGIF + "&api_key=8S6m8Ed7pFQS1y8sTnybvoCJPvAbRWYW&limit=10";

    $.ajax({
        queryURL
    })


})