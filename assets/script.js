var ldark = document.getElementById("linkedindark");
var llight = document.getElementById("linkedinlight");
var theme = 'l';
function change_theme() {
    if (theme == 'l') {
        theme == 'd'
        llight.setAttribute('visibility', 'hidden');
        ldark.setAttribute('visibility', 'visiable');
    } else {
        theme = 'l'
        ldark.setAttribute('visibility', 'hidden');
        llight.setAttribute('visibility', 'visiable');
    }
}