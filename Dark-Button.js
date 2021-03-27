/*--- Dark Button ---*/
var versionForo = 'ModernBB';
var posicionBotonModoNoche = 'flotando'; // admite toolbar y flotando
var css = '.conteneur_minwidth_IE,
#wrap {
    background-color: #121212;
  color: grey;
}
.inner,
.icon,
.module,
.content,
.post,
.row {
    background-color: #1c1c1c;
  color: grey; }
 
  .block-footer {
    background-color: #1d262c;
}
a {
    color: grey !important;
}
p {
    color: grey;
}
.block {
    background-color: #1d262c;
    color: grey;
}
 
#picture_legend, #privmsgs-menu {
    background-color: #1d262c;
}
 .inner, .icon, .module, .content, .post, .row:hover {background-color:#1c1c1c !important;}
 
li.row {
    border-color: grey !important;
}
 
.panel {
    background-color: #1c1c1c;
}
.row3 {
    background-color: #1c1c1c;
}
 
#cp-main .panel.sig {
    background-color: #1c1c1c;
}
 
.h3, h3 {
    border-color: #1c1c1c;
}
 
.button, .button1, .button2, input[type="submit"] {
    background-color: #1d262c;
}';
// eventos
if (modoNocturnoActivado() == true) {
    $('head').append('<style>' + css + '</style>');
}
document.addEventListener("DOMContentLoaded", function(event) {
 
    if (posicionBotonModoNoche == 'toolbar' && _userdata["session_logged_in"] == 1) {
        document.getElementById('fa_menulist').innerHTML += '<li class="fa_separator"></li><li><a href="#" id="activar-modo-nocturno">' + textos() + '</a></li>';
    } else if (posicionBotonModoNoche == 'flotando' || _userdata["session_logged_in"] == 0) {
        versionForo = versionForo.toUpperCase();
        var contenedor_boton;
        if (versionForo == 'PHPBB3' || versionForo == 'MODERNBB') {
            contenedor_boton = document.getElementById('wrap');
        } else if (versionForo == 'PUNBB' || versionForo == 'INVISION') {
            contenedor_boton = document.getElementsByClassName('container_IE')[0];
        } else if (versionForo == 'PHPBB2') {
            contenedor_boton = document.getElementsByClassName('bodylinewidth')[0];
        } else {
            console.log('إصدار المنتدى غير صحيح. مسموح فقط: phpBB3 و phpBB2 و punBB و Invision و ModernBB');
        }
        contenedor_boton.innerHTML += '<div id="boton-flotante"><a href="#" id="activar-modo-nocturno">' + textos() + '</a></div>';
        var boton_flotante_element = document.getElementById('boton-flotante');
        /*boton_flotante_element.style.bottom = '0';
        boton_flotante_element.style.position = 'fixed';
        boton_flotante_element.style.backgroundColor = 'white';
        boton_flotante_element.style.padding = '4px';
        boton_flotante_element.style.fontSize = '14px';
        boton_flotante_element.style.border = '1px dotted #3a9bca';*/
    } else {
        console.error('قيمة خاطئة للمتغير positionButtonModeNight');
    }
    document.getElementById('activar-modo-nocturno').addEventListener("click", function(event) {
        if (modoNocturnoActivado() == true) {
            document.cookie = "modoNoche=0; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        } else {
            document.cookie = "modoNoche=1";
        }
        location.reload();
    });
});
 
// funciones
 
function modoNocturnoActivado() {
    var name = 'modoNoche' + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return true;
        }
    }
    return false;
}
 
function textos() {
    if (modoNocturnoActivado() == false) {
        /*return 'قم بتشغيل الوضع الليلي';*/
      	return '<i class="fal fa-moon" title="قم بتشغيل الوضع الليلي"></i>';
    } else {
        /*return 'قم بإيقاف تشغيل الوضع الليلي';*/
      	return '<i class="fal fa-sun" title="قم بإيقاف تشغيل الوضع الليلي"></i>';
    }
}
