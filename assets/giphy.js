//in this assignment I will us the giphy api to create a dynamic web page
//will populate based on the value passed into it through text

//create an array to hold the "buttons"

$(document).ready(function(){
    let heros = ["superman", "batman", "aquaman", "birdperson", "spiderman"]

    //this will be a function to make the buttons and add them to the page

    function populateButtons(arrayToUse, classToAdd, areaToAddTo){
        $(areaToAddTo).empty();

        for(let i = 0; i <arrayToUse.legth; i ++){
            let a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);

        }
    }


    //create a function that will 
    $(document.onabort("click", ".hero-button", function(){
        $("#images").empty();

        $(".hero-button").removeClass("active");
        let type = $(this).attr("data-type");
        let queryURL = "https://api.giphy.com/v1/gifs/search?q" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url:queryURL,
            methed: "GET"
        })
        .then(function(response){
            let results = response.data;
            for (var i = 0; i < results.lenth; i++){
                let heroDiv = $("<div class=\"hero-item\">")

                let rating = results[i].rating;

                let p = $("<p>").text("Rating: " + rating);
                let animated = results[i].images.fixed_height.url;
                let still = results[i].images.fixed_height.url;
                let heroImage = $("<img>");
                heroImage.attr("src", still);
                heroImage.attr("data-still", still);
                heroImage.attr("data-animate", animated);
                heroImage.attr("data-state", "still");
                heroImage.addClass("hero-image");
                
            }
        })
        }))
})