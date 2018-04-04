(function($) {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        alert('Пожалуйста не изобатайте велосипед! \n Пользуйтесь нормальным браузером!');
        window.location.href = "https://www.opera.com/ru";
    }

    var
        preloader_stat = $("#preloader-svg__percentage"),
        hasImageProperties = ["background", "backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
        hasImageAttributes = ["srcset"],
        match_url = /url\(\s*(['"]?)(.*?)\1\s*\)/g,
        all_images = [],
        total = 0,
        count = 0;

    var
        circle_o = $("#preloader-svg__img .bar__outer"),
        circle_c = $("#preloader-svg__img .bar__center"),
        circle_i = $("#preloader-svg__img .bar__inner"),
        length_o = Math.PI*(circle_o.attr("r") * 2),
        length_c = Math.PI*(circle_c.attr("r") * 2),
        length_i = Math.PI*(circle_i.attr("r") * 2);



    function img_loaded(){
        var percentage = Math.ceil( ++count / total * 100 );
        percentage = percentage > 100 ? 100 : percentage;
        circle_o.css({strokeDashoffset: ((100-percentage)/100)*length_o });
        if(percentage > 50) {
            circle_c.css({strokeDashoffset: ((100-percentage)/100)*length_c });
        }
        if(percentage == 100) {
            circle_i.css({strokeDashoffset: ((100-percentage)/100)*length_i });
        }
        preloader_stat.html(percentage);
        if(count === total) return done_loading();
    }

    function done_loading(){
        $("#preloader").delay(700).fadeOut(300, function(){
            $("#preloader__progress").remove();
            $("div.flip-card").removeClass('block_none');
        });
    }

    function images_loop () {
        setTimeout(function () {
            var test_image = new Image();

            test_image.onload = img_loaded;
            test_image.onerror = img_loaded;

            if (count != total) {
                if (all_images[count].srcset) {
                    test_image.srcset = all_images[count].srcset;
                }
                test_image.src = all_images[count].src;

                images_loop();
            }
        }, 100);
    }

    $("*").each(function () {
        var element = $(this);
        if (element.is("img") && element.attr("src")) {
            all_images.push({
                src: element.attr("src"),
                element: element[0]
            });
        }

        $.each(hasImageProperties, function (i, property) {
            var propertyValue = element.css(property);
            var match;

            if (!propertyValue) {
                return true;
            }
            match = match_url.exec(propertyValue);
            if (match) {
                all_images.push({
                    src: match[2],
                    element: element[0]
                });
            }
        });

        $.each(hasImageAttributes, function (i, attribute) {
            var attributeValue = element.attr(attribute);
            if (!attributeValue) {
                return true;
            }
            all_images.push({
                src: element.attr("src"),
                srcset: element.attr("srcset"),
                element: element[0]
            });
        });
    });
    total = all_images.length;

    if (total === 0) {
        done_loading();
    } else {
        preloader_stat.css({opacity: 1});
        images_loop();
    }

    window.addEventListener('load', function(){
        if(!this.document.getElementById('submit'))
            return;
        document.getElementById('submit').addEventListener('click', function(e){
            var error = document.getElementById('popup1');
            var form = document.forms[0];
            var arraInputText = form.elements;
            if(form.name === "logIn"){
            console.log('ok');
            }else if(form.name === "message"){
            console.log('fail');
            }

            for(var i = 0; i < arraInputText.length; i++) {
                console.log(arraInputText[i].type);
                if (arraInputText[i].type === 'text' || arraInputText[i].type === 'password') {
                    if (arraInputText[i].value.length <= 0) {
                        error.style.display = "block";
                    }
                }
            }

            error.addEventListener('click', function(){
                this.style.display = "none";
            });

            e.preventDefault();
        });
    });

})(jQuery);