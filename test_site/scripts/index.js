window.onload = function(){
    var audio = document.getElementById("main_bgm");
    if (audio.paused) {
        document.getElementById("music_logo").src = "../test_site/images/unmusic.png";
    }else{
        document.getElementById("music_logo").src = "../test_site/images/music.png";
    }
}

function play_music(){
    var audio = document.getElementById("main_bgm");
    if (audio.paused) {
        audio.play();
        document.getElementById("music_logo").src = "../test_site/images/music.png";
    }else{
        audio.pause();
        audio.currentTime = 0;
        document.getElementById("music_logo").src = "../test_site/images/unmusic.png";
    }
}

function changeBGM(id){
    switch (id) {
        case "main":
            document.getElementById("main_bgm").src = "musics/mainBGM.mp3";
            break;
        case "char1":
            document.getElementById("main_bgm").src = "musics/char1BGM.mp3";
            break;
        case "char2":
            document.getElementById("main_bgm").src = "musics/char2BGM.mp3";
            break;
        case "char3":
            document.getElementById("main_bgm").src = "musics/char3BGM.mp3";
        default:
            break;
    }
    document.getElementById("music_logo").src = "../test_site/images/unmusic.png";
}

function goCharPage(charId){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("artists").style.display = "none";
    document.getElementById("book").style.display = "none";
    document.getElementById("navbar-nav-ul").style.visibility = "hidden";
    document.getElementById("character_page").style.display = "inline";
    switch (charId) {
        case 1:
            document.getElementById("char_img").src = "../test_site/images/char1.png";
            document.getElementById("char1_word").style.display = "inline";
            document.getElementById("char2_word").style.display = "none";
            document.getElementById("char3_word").style.display = "none";
            changeBGM("char1");
            break;
        case 2:
            document.getElementById("char_img").src = "../test_site/images/char2.png";
            document.getElementById("char1_word").style.display = "none";
            document.getElementById("char2_word").style.display = "inline";
            document.getElementById("char3_word").style.display = "none";
            changeBGM("char2");
            break;
        case 3:
            document.getElementById("char_img").src = "../test_site/images/char3.png";
            document.getElementById("char1_word").style.display = "none";
            document.getElementById("char2_word").style.display = "none";
            document.getElementById("char3_word").style.display = "inline";
            changeBGM("char3");
            break;
        default:
            break;
    }
}

function goMainPage(){
    document.getElementById("homepage").style.display = "inline";
    document.getElementById("artists").style.display = "inline";
    document.getElementById("book").style.display = "inline";
    document.getElementById("navbar-nav-ul").style.visibility = "visible";
    document.getElementById("character_page").style.display = "none";
    changeBGM("main");
}
