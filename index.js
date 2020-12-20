function explode(target, size, xpos, ypos) {
    if (!size) size = 64;
    if (!xpos) xpos = 0;
    if (!ypos) ypos = 0;

    var explosion = document.createElement("div");
    explosion.className = "explosion";
    explosion.style.width = size + "px";
    explosion.style.height = size + "px";

    var h = '<div class="explosion-inner"><div class="explosion-line-inner"></div></div>';

    var x = '';
    x += '<div class="explosion-inner">';

    x += '<div class="explosion-line left" style="width:' + size + 'px;height:' + size + 'px">' + h + '</div>';
    x += '<div class="explosion-line right" style="width:' + size + 'px;height:' + size + 'px">' + h + '</div>';
    x += '<div class="explosion-line up" style="width:' + size + 'px;height:' + size + 'px">' + h + '</div>';
    x += '<div class="explosion-line down" style="width:' + size + 'px;height:' + size + 'px">' + h + '</div>';
    x += '<div class="explosion-line tr" style="width:' + size + 'px;height:' + size + 'px">' + h + '</div>';
    x += '<div class="explosion-line dr" style="width:' + size + 'px;height:' + size + 'px">' + h + '</div>';
    x += '<div class="explosion-line dl" style="width:' + size + 'px;height:' + size + 'px">' + h + '</div>';
    x += '<div class="explosion-line ul" style="width:' + size + 'px;height:' + size + 'px">' + h + '</div>';

    x += '</div>';
    explosion.innerHTML = x;

    target.appendChild(explosion);

    setTimeout(function () {
        if (!explosion) return;
        explosion.parentNode.removeChild(explosion);
    }, 750);

    explosion.style.left = xpos + "px";
    explosion.style.top = ypos + "px";

    return explosion;
}

setInterval(function () {
    var e = explode(document.body, 32, Math.random() * document.body.clientWidth, Math.random() * document.body.clientHeight);
    e.style.zIndex = 0;
}, 300);

document.addEventListener('click', function (e) {
    var blast = explode(document.body, 128, e.clientX, e.clientY);
    blast.style.zIndex = 200;
}, true);

document.onload = function() {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome){ //if is not chrome
        $('#iframeAudio').remove() //remove iframeAudio
    }
    else { //if is chrome
        $('#playAudio').remove() //play audio
    }
}
