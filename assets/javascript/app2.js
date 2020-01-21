//array to hold buttons values
var topics = [
    "Ellen Ripley",
    "Dwayne Hicks",
    "Xenomorph",
    "Yaphet Kotto",
    "Bolaji Badejo",
    "Facehugger",
    "Niander Wallace",
    "Rick Deckard",
    "Roy Batty",
    "Millenium Falcon",
    "The Big Lebowski",
    "Alex Honnold",
    "El Cap",
    "Half Dome"

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

            var gifStill = $('<img class="gif" data-state="still">');
            gifStill.attr("src", results[j].images.fixed_height_still.url);


            gifDiv.prepend(p);
            gifDiv.prepend(gifStill);

            $("#gif-Feed").prepend(gifDiv);
            console.log(gifDiv)
            

            $(".gif").on("click", function() {
                console.log("CLICKED GIF");
                console.log(this)
                var state = $(this).attr("data-state");
                // var gifAnimated = $("img")
                // var gifAnimated = $(this).attr
                if (state == "still") {
                    var gifAnimate = $(this).attr("data-state", "animate")                    
                    gifAnimate.attr("src", results[j].images.fixed_height.url);
                    console.log(this)
                    // $(this).attr("src", "results" + [j] + ".images.fixed_height.url");
                } else if (state == "animate") { 
                    $(this).attr("data-state", "still")
                    $(this).attr("src", results[j].images.fixed_height_still.url)
                } 
                // gifStill.attr("src", results[j].images.fixed_height.url)
    
                
            });
        }
    });
})

//function to start and stop the gif's animations

    //variable to store the still or animated state of the gif
