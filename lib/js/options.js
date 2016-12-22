
$(document).ready(function(){
    $(".char").each(function(i, el){
        var $el = $(el);
        document.querySelector("[for='"+ $el.prop("id") +"']").setAttribute("data-char", $el.val());
        $el.on("keyup blur", function(e){
            $el = $(e.target);
            document.querySelector("[for='"+ $el.prop("id") +"']").setAttribute("data-char", $el.val());
        });
    })
});