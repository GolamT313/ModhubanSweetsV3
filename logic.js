window.onload = function(){
    $.get("navbar.html", function(data){
        $("#navBar").html(data);
    })
}
