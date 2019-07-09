//in this assignment I will us the giphy api to create a dynamic web page
//will populate based on the value passed into it through text

//create an array to hold the "buttons"

$(document).ready(function(){
     let heros = ["superman", "batman", "aquaman", "birdperson", "spiderman"]

    //this will be a function to make the buttons and add them to the page

    function populateButtons(arrayToUse, classToAdd, areaToAddTo){
        $(areaToAddTo).empty();

        for(let i = 0; i < arrayToUse.length; i++){

            let a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);

        };
    };


    //create a function that will populate the images from giphy api
    $(document).on("click", ".hero-button", function(){
        $("#images").empty();

        $(".hero-button").removeClass("active");
        $(this).addClass("active");

        let type = $(this).attr("data-type");
        //let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

        //ajax call

        $.ajax({
            url:queryURL,
            method: "GET"
        })

        .then(function(response){
            let results = response.data;

            for (var i = 0; i < results.length; i++){
                let heroDiv = $("<div class=\"hero-item\">");

                let rating = results[i].rating;

                let p = $("<p>").text("Rating: " + rating);
                let animated = results[i].images.fixed_height.url;
                let still = results[i].images.fixed_height_still.url;
                let heroImage = $("<img>");
                heroImage.attr("src", still);
                heroImage.attr("data-still", still);
                heroImage.attr("data-animate", animated);
                heroImage.attr("data-state", "still");
                heroImage.addClass("hero-image");

                heroDiv.append(p);
                heroDiv.append(heroImage);

                $("#images").append(heroDiv);
            }
        });
        });

//set the state from still to animated when clicking individual images
$(document).on("click", ".hero-image", function(){
    let state = $(this).attr("data-state");

    if(state === "still"){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else{
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});


$("#add-hero").on("click", function(event){
    event.preventDefault();
    let newHero = $("input").eq(0).val();

    if(newHero.length > 2){
        heros.push(newHero);
    }
    populateButtons(heros,"hero-button", "#hero-buttons");
});

populateButtons(heros,"hero-button", "#hero-buttons");
})