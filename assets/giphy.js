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

        $(".hero-button").remove
    }))
})