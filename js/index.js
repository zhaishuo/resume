~function (desW) {
    var winW = document.documentElement.clientWidth,
        n = winW / desW,
        oMain = document.getElementById('main');
    if (winW > desW) {
        oMain.style.width = desW + "px";
        return;
    }
    document.documentElement.style.fontSize = n * 100 + "px";
}(640);


var swiper1 = new Swiper(".swiper-container", {
    direction: "vertical",
    speed: 750,
    loop: true,
    onSlideChangeEnd: function (swiper) {
        var slideAry = swiper.slides,
            trueNum = slideAry.length - 2,
            lastInd = trueNum + 1;
        var curIN = swiper.activeIndex;
        [].forEach.call(slideAry, function (item, index) {
            if (index === curIN) {
                switch (curIN) {
                    case 0:
                        item.id = 'page' + trueNum;
                        break;
                    case lastInd:
                        item.id = 'page' + 1;
                        break;
                    default:
                        item.id = 'page' + curIN;
                }
                return;
            }
            item.id = null;
        });
    }
});
(function () {
    var music = document.getElementById('music'),
        musicAudio = document.getElementById('musicAudio');
    music.addEventListener('click', function () {
        if (musicAudio.paused) {
            musicAudio.play();
            music.className = "music move";
            return;
        }
        musicAudio.pause();
        music.className = "music";
    }, false);
    window.setTimeout(function () {
        musicAudio.play();
        musicAudio.addEventListener('canplay', function () {
            music.style.display = 'block';
            music.className = "music move";
        }, false);
    }, 1000);
})();