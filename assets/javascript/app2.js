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


})