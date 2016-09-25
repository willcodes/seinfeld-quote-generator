$(document).ready(function() {
$("#tweet").hide();
    /*  random = quotes[Math.floor(Math.random() * quotes.length)];*/
    function randomQuote() {
        random = quotes[Math.floor(Math.random() * quotes.length)];
        thequote = random.quote;
        var image = random.image;
        var episode = random.episode;
        var season = random.season;
        if (random.image === "") {
            image = '../seinfeld/images/bg.jpg';
        }
        if (season === undefined) {
            season = "Unknown";
        }
        if (episode === undefined) {
            episode = "Unknown";
        }
        $("main").css("background-image", "url(" + image + ")");
        $("#thisquote").text(thequote);
        $("#thisauthor").text("-" + random.author);
        $("#info").text("Season " + season + ":" + " Episode " +
            episode);
    }

    function removeHeader() {
        $("#header").remove();
        return true;
    }
    $('#getQuote').click(function() {
        removeHeader();
        randomQuote();
        $("#tweet").show();
    });
    $("#tweet-me").on("click", function() {
        var quote = $("#thisquote").text();
        var author = $("#thisauthor").text();
        var myUrl = 'https://twitter.com/intent/tweet?text=' +
            quote + author;
        window.open(myUrl);
    });
    
});