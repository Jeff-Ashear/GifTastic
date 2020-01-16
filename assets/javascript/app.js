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
    var buttons = $('<button>' + topics[i] + '</button>')
    buttons.appendTo("#buttonDiv");
}