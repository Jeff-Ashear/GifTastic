//array to hold buttons values
var topics = [
    "Ellen Ripley",
    "Dwayne Hicks",
    "Xenomorph",
    "Yaphet Kotto",
    "Bolaji Badejo",
    "Twin Peaks",
    "Blue Velvet",
    "David Lynch",
    "Rick Deckard",
    "Roy Batty",
    "Millenium Falcon",
    "The Big Lebowski",
    "Alex Honnold",
    "Half Dome",
    "RGB",
    "Hypnotoad",
    "Bender",
];

//looping the array to append the buttons to the html
for (var i = 0; i < topics.length; i++) {
    var buttons = $('<button class="gifBtn" data-gif="' + topics[i] + '">' + topics[i] + '</button>')
    buttons.appendTo("#buttonDiv");
};

//clicking a button catches the value of that button
$(document).on("click", ".gifBtn", function() {
    var thisGIF = $(this).attr("data-gif");
    console.log("click")
    console.log(thisGIF)
    //inserts the value of the button clicked into a giphy search query
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisGIF + "&api_key=8S6m8Ed7pFQS1y8sTnybvoCJPvAbRWYW&limit=10";
    
    //ajax promise
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        var results = response.data;
        console.log(response)
        
        //iterating the rusults of the query, and grabbing the appropriate data to append to the html
        for (var j = 0; j < results.length; j++) {
            
            var gifDiv = $('<div id="gifDiv">');
            
            var rating = results[j].rating;
            
            var p = $('<p class="row" class="controls">').text('Rating: ' + rating + "  ");

            var favBtn = $('.controls').html('<button id="favoriteBtn">Favorite Me</button>');
            
            var gifStart = $('<img class="gif" data-state="still">');
            gifStart.attr("src", results[j].images.fixed_height_still.url); gifStart.attr("data-still", results[j].images.fixed_height_still.url);
            gifStart.attr("data-animated", results[j].images.fixed_height.url);
            
            gifDiv.prepend(p);
            gifDiv.prepend(gifStart);
            p.append(favBtn);

            $("#gif-Feed").prepend(gifDiv);
            console.log(gifDiv)
            
        } 
        //function to start and stop animations
        $(".gif").on("click", function() {
            
            console.log("CLICKED GIF");
            console.log(this)
            var state = $(this).attr("data-state");
            
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animated"));
                $(this).attr("data-state", "animate");
                console.log("this again: " + this)
            } else if (state === "animate") { 
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }   
        });   
    });   
});

//when the submit button is clicked, the user input's value is added to a button, which is then added to the html
$("#buttonSubmit").on("click", function(event) {
    event.preventDefault();
    console.log("form click")
    var input = $("#userInput").val().trim();
    topics.push(input)
    // console.log(input)
    console.log(topics)
    var button = $('<button class="gifBtn" data-gif="' + input + '">' + input + '</button>')
    $("#buttonDiv").append(button);
    // $("#buttonDiv").empty();
    // for (var i = 0; i < topics.length; i++) {
    //     var buttons = $('<button class="gifBtn" data-gif="' + topics[i] + '">' + topics[i] + '</button>')
    //     buttons.appendTo("#buttonDiv");
    //     console.log(topics)
    // };
    $("#userInput").val('');
    $("header").css("background-color", "green");
});

