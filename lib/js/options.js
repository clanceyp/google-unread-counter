
(function(){
    var $img1, $img2,
        dataURI = {
            "#mailSettings" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEFklEQVRYR+2XXWwUVRTHz7kzO9tuWwstJS1FSlAwRtKq1RKgFBWlBlKjiYlKYtOEqNEHMdHAgwE/tjQkPhiDISB+oA/wUkkwkcQYEiooLRarSGu77ba03V1a+r1Td3c+7j1ml+66s+1iu9T0pfdtZs45/989554zMwgLvHCB9WERIJIBzws71jHEvUrl05rj+ZcK/8+yBH8826vV1+cC8I9XnPz+Cnqqn8sF0/yLAeSFhZXNFc0Z1dVrCaXs+QThRAHjdP3voR/ObroVVwQ5k4rRu+uZFxHolEVs2fKB7P3vjWC644H5gBCG5lLraiXyeu6Jj0eI+/DGrqoaAvgqUUhIyLNe3/OLrbhky51AcLe7YfKjQxtImGkWcSKYCAaTA0SNlbINLY7drxQBSjlzAUHiE+rJU21mw7mNiX4hYY609g/2CRLfJc1AvBMuyR7K2u+8wbKyimcDQcFgq//ggWy6Obwy0X5IVZt7R8bWEEEOIH4wDYDefqcJjh29Fycnc+OdOWOUufvVi7bSR8sZY0nnh9l27bz/8CfljJtyvL/ObIGeJ5+64j929N+SzgQAdYcCwECj0/VuvNz8SOIOlJLSP9NfeyMfZRbpmtgiMeL/4niPuNw4zWe88O6rveUVuSTL+UatU4r5JAWQ0BE2Im//JXHk8xLJDEWuowszMsYcB5zXbUuXPhS+Z6j+lknn+4U4PrbcwiSB3r11e5NaUBDdNZ8TQCQY5x46cWICXS5rSyJC+ss1F1BRuPrl8a2SEJay/L0sz9W1bbtMsrwmDioFgPDIEIKkTtcF8+tvNkmcW2qbWCKTSHjKK34eXbV6I2Ms0TY1gJhIyHCJz47IzOuL31XscSAr0+Ou3DnB7WnJBtgdAkSkhEaXmprwzJkKILoljgj9xQ9eHFm//mEAZjkvCRmaD4CpkKraQoc/zTcMTe6q3NmnOzJKZzEj5hEg0ibiD3dHz6iqa4/PQjxypOfeBTNE1vWQUGzKT0CsTAAI1T/e0NXj2yJJcNd/gFgAEODD6aM4PIim5sBMwfSQPqDYbW5A3GzpeeKN7W3ddo0bkdmQZKUOYBgiQIL/ardLawnYiiQCo4PDo01ej+8Jxph9BpvUAEKa1g1M6kuzyY/Npta6aTS0d3QWCA7rbtsFAM7bloCbIqCbwWYlLa1IAqloNuJRGwTyebyDbYNDw9viXl7WDCAdnP5FNHUGgsHAdUS5U1HkcAA2F/GobXiC6oZxrr3DfT8AhL81rQBE72JPzbNL7Bq/BhgxAFFbNxYIBVozHJl5KOF9qQhP96F2d7dnUJ1Uy2NtKARniGWRF4ivumoVGPAmIqyc2Le3KzM3J48JnOkQpcxDJIyBm0Oe/j1vrQZAnyTEt1WNV39b/DFZzMCCZ+AfZqcoY/wmhw8AAAAASUVORK5CYII=",
            "#inboxSettings" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowOUFGNzc0MEMxMDgxMUU2QkJGODk4QzU0MDBGNkIyOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowOUFGNzc0MUMxMDgxMUU2QkJGODk4QzU0MDBGNkIyOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5QUY3NzNFQzEwODExRTZCQkY4OThDNTQwMEY2QjI5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5QUY3NzNGQzEwODExRTZCQkY4OThDNTQwMEY2QjI5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vdueQQAACspJREFUeNrMWHtw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"
        };

    function getVal(options){
        var ops = options||{},
            val = ops.val || $("[name='char-test']").val(),
            max = $("[name='max-count']").val(),
            infinity = $("[name='char-infinity']").val();
        try {
            if (parseInt(max) < parseInt(val) && !ops.val){
                val = infinity;
            }
        } catch (e){}
        return val;
    }
    function setIconVisability(){
        if (location.hash === "#mailSettings"){
            $img2.css("display","block");
            $img1.css("display","none");
        } else {
            $img2.css("display","none");
            $img1.css("display","block");
        }
    }
    function updateIconColorOnly(){
        var options = {};
        if (location.hash === "#mailSettings"){
            options = {
                bgColor: $("[name='mail-unread-bg-color']").val(),
                textColor: $("[name='mail-unread-text-color']").val()
            }
        } else {
            options = {
                bgColor: $("[name='inbox-unread-bg-color']").val(),
                textColor: $("[name='inbox-unread-text-color']").val()
            }
        }
        setIconVisability();
        favicon.badge(getVal(), options);
    }
    function update(options, create) {
        var val = getVal(options),
            options2;
        if (create){
            options2 = options = {
                animation : $("[name='animation']").val(),
                position: $("[name='position']").val(),
                type: $("[name='type']").val(),
                bgColor: $("[name='inbox-unread-bg-color']").val(),
                textColor: $("[name='inbox-unread-text-color']").val()
            };
            window.favicon = new Favico(options);
            options.elementId = 'badgeMirror1';
            window.faviconMirror1 = new Favico(options);
            options2.elementId = 'badgeMirror2';
            options2.bgColor = $("[name='mail-unread-bg-color']").val();
            options2.textColor = $("[name='mail-unread-text-color']").val();
            window.faviconMirror2 = new Favico(options2);
            options = {};
        }
        favicon.badge(val, options||{});
        faviconMirror1.badge(val, options||{});
        faviconMirror2.badge(val, options||{});
        setIconVisability();
    }
    function init(css){
        $img1 = $('<img id="badgeMirror1" />').appendTo("body");
        $img2 = $('<img id="badgeMirror2" />').appendTo("body");

        $img1.css(css).attr("src","/icons/inbox-logo.png");
        $img2.css(css).attr("src","/icons/gmail-logo.png");

        $(".char").each(function(i, el){
            var $el = $(el);
            document.querySelector("[for='"+ $el.prop("id") +"']").setAttribute("data-char", $el.val());
            $el.on("keyup blur", function(e){
                $el = $(e.target);
                document.querySelector("[for='"+ $el.prop("id") +"']").setAttribute("data-char", $el.val());
            });
        });

        update({},true);
    }


    $(document).ready(function(){
        var link = document.querySelector("link[rel='icon']"),
            css = {
                position: "fixed",
                width: "140px",
                left: "26px",
                top: "20px",
                display: "none"
            };
        init(css);

        $("body").on('change',"[name='inbox-unknown-text-color'], [name='inbox-unknown-bg-color']",function(){
            update({
                bgColor: $("[name='inbox-unknown-bg-color']").val(),
                textColor: $("[name='inbox-unknown-text-color']").val(),
                val: $("[name='char-unknown']").val()
            });
        });
        $("body").on('change',"[name='inbox-clear-text-color'], [name='inbox-clear-bg-color']",function(){
            update({
                bgColor: $("[name='inbox-clear-bg-color']").val(),
                textColor: $("[name='inbox-clear-text-color']").val(),
                val: $("[name='char-tick']").val()
            });
        });
        $("body").on('change',"[name='inbox-unread-text-color'], [name='inbox-unread-bg-color']",function(){
            update({
                bgColor: $("[name='inbox-unread-bg-color']").val(),
                textColor: $("[name='inbox-unread-text-color']").val()
            });
        });


        $("body").on('change',"[name='mail-unknown-text-color'], [name='mail-unknown-bg-color']",function(){
            update({
                bgColor: $("[name='mail-unknown-bg-color']").val(),
                textColor: $("[name='mail-unknown-text-color']").val(),
                val: $("[name='char-unknown']").val()
            });
        });
        $("body").on('change',"[name='mail-clear-text-color'], [name='mail-clear-bg-color']",function(){
            update({
                bgColor: $("[name='mail-clear-bg-color']").val(),
                textColor: $("[name='mail-clear-text-color']").val(),
                val: $("[name='char-tick']").val()
            });
        });
        $("body").on('change',"[name='mail-unread-text-color'], [name='mail-unread-bg-color']",function(){
            update({
                bgColor: $("[name='mail-unread-bg-color']").val(),
                textColor: $("[name='mail-unread-text-color']").val()
            });
        });



        $("body").on('change',"[name='animation'], [name='position'], [name='type']",function(){
            location.reload();
        });

        $("body").on('change',"[name='char-test']",function(){
            update();
        });

        $("body").on("click",".settings__navigation-link", function(e){
            var icon = dataURI[ $(e.target).attr("href") ];
            if (icon) {
                link.setAttribute("href", icon);
                favicon = new Favico();
            }
            if (icon){
                setTimeout(function(){
                    updateIconColorOnly();
                },100);
            }
        });
    });
})();