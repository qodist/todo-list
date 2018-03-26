//click off todo's
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//listen for enter keypress
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new user todo
        var todoText = ($(this).val());
        $(this).val("");
        //create new ul and append li
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});