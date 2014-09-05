$(function () {
    
    $.fn.is_on_screen = function () {

        var win = $(window);

        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };


});
var seguimos = true;


function generarCirculosDiseñoWeb() {
    var colors = [
            ['#D3B6C6', '#4B253A'], ['#FCE6A4', '#EFB917'], ['#BEE3F7', '#45AEEA'], ['#F8F9B6', '#D2D558'], ['#F4BCBF', '#D43A43']
    ],
        circles = [],

    listHacemos = [
          ['Jquery', '85'], ['HTML5', '75'], ['.Net', '95'], ['CSS3', '100'], ['MVC', '100'], ['Photoshop', '90']
    ];

    for (var i = 1; i <= 6; i++) {
        var child = document.getElementById('circles-' + i),
            //percentage = 31.42 + (i * 9.84),
            porcentaje = listHacemos[i - 1][1];
        textoo = listHacemos[i - 1][0];

        circle = Circles.create({
            id: child.id,
            value: porcentaje,
            text: textoo,
            radius: getWidth(),
            width: 10,
            colors: colors[i - 1]
        });


        var node = document.createElement('div');
        node.style.textAlign = 'center';
        var textnode = document.createTextNode(textoo);
        node.appendChild(textnode);
        child.appendChild(node);
    }

    window.onresize = function (e) {
        seguimos = true;
        for (var i = 0; i < circles.length; i++) {
            circles[i].updateRadius(getWidth());
        }
    };


}

function generarCirculosMobile() {
    var colors = [
            ['#D3B6C6', '#4B253A'], ['#FCE6A4', '#EFB917'], ['#BEE3F7', '#45AEEA'], ['#F8F9B6', '#D2D558'], ['#F4BCBF', '#D43A43']
    ],
        circles = [],

    listHacemos = [
          ['Android', '85'], ['JAVA', '75'], ['.Net C#', '95']
    ];

    for (var i = 1; i <= 3; i++) {
        var child = document.getElementById('circles-' + i),
            //percentage = 31.42 + (i * 9.84),
            porcentaje = listHacemos[i - 1][1];
        textoo = listHacemos[i - 1][0];

        circle = Circles.create({
            id: child.id,
            value: porcentaje,
            text: textoo,
            radius: getWidth(),
            width: 10,
            colors: colors[i - 1]
        });


        var node = document.createElement('div');
        node.style.textAlign = 'center';
        var textnode = document.createTextNode(textoo);
        node.appendChild(textnode);
        child.appendChild(node);
    }

    window.onresize = function (e) {
        seguimos = true;
        for (var i = 0; i < circles.length; i++) {
            circles[i].updateRadius(getWidth());
        }
    };


}


function appearDiseño($elemento, cual) {

    //alert(cual);
    if ($elemento.length > 0) { // if target element exists in DOM
        if ($elemento.is_on_screen()) { // if target element is visible on screen after DOM loaded
            if (cual == 'web')
                {
            setTimeout(generarCirculosDiseñoWeb, 1000)
            }
            if (cual == 'mobile')
            {
                setTimeout(generarCirculosMobile, 1000)
            }
        } else {

        }
    }

    $(window).scroll(function () { // bind window scroll event
        if (seguimos) {
            if ($elemento.length > 0) { // if target element exists in DOM
                if ($elemento.is_on_screen()) { // if target element is visible on screen after DOM loaded
                    if (cual == 'web') {
                        setTimeout(generarCirculosDiseñoWeb, 1000)
                        $(".circle").fadeIn(2000);
                        seguimos = false;
                    }
                    if (cual == 'mobile') {
                        setTimeout(generarCirculosMobile, 1000)
                        $(".circle").fadeIn(2000);
                        seguimos = false;
                    }
                    
                    
                }


            }
        }
    });


}

function getWidth() {
    return window.innerWidth / 20;
}





