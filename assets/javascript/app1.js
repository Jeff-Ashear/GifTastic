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

for (var i = 0; i < topics.length; i++) {
    var buttons = $('<button id="buttonNum' + [i] + '">"' + topics[i] + '</button>')
    buttons.appendTo("#buttonDiv");
};

//page works with this code, but can't get the value of the button displayed
// $("button").on("click", function() {
//     var thisGIF = $(this).attr("getGIF");
//     console.log("click")
//     console.log(thisGIF)


// })

//Much closer:
// $("button").on("click", function() {
//     var thisGIF = $(this).text(topics[i]);
//     console.log("click")
//     console.log(thisGIF)


// })

$("button").on("click", function() {
    var thisGIF = $(this).attr("#buttonNum" + [i]);
    console.log("click")
    console.log(thisGIF)


})