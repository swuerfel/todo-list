// Check off specific Todos by clicking
$("li").click(function(){
  $(this).toggleClass("completed");
});

//click on X to delete //
$("span").click(function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});
