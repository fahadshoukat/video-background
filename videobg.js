const video = document.querySelector(".myVideo");

const btn = document.querySelector(".play-pause-btn");

btn.addEventListener("click", function(){

    if(btn.classList.contains("slide")){
        btn.classList.remove("slide");
        video.play();
    }
    else{
        btn.classList.add("slide");
        video.pause();
    }
})