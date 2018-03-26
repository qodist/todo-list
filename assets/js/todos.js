//click off todo's
$("li").on("click", function(){
    $(this).toggleClass("completed");
});

//click on x to delete todo
$("span").on("click", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});