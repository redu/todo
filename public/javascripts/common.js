jQuery(function(){
    
    // Setting up
    $("#todo").after("<li id=\"buffer\" class=\"clearfix\"> <form action=\"#\" class=\"edit\"> <fieldset> <input type=\"text\" value=\"Your TODO here.\" class=\"content\" /> <button>Update</button> </fieldset> </form> <form action=\"#\" class=\"remove\"> <fieldset> <input type=\"hidden\" /> <button>Remove</button> </fieldset> </form> </li>");
    $("#buffer").hide();

    $(".edit input[type=text]").hide()
    $(".edit input[type=text]").each(function(){
        var value = $(this).val();
        $(this).after("<span class=\"item\">" + value + "</span>");
    });

    $('.item').live("dblclick", function(){
        $(this).hide();
        $(this).prev(":first").show();
    });

    $(".edit button").live("click", function(){
        //console.log($(this).prev());
        $(this).prevAll("input:first").toggle();
        $(this).prev().toggle();
    });

    $(".remove button").live("click", function(){
        $(this).parents("li:first").remove();
    });

    $("#new button").click(function(){
        var value = $(".edit input[type=text]").val();
        var html = $("#buffer").clone(true).show();
        $("#todo li:last").after(html);
    });
});
