const audio=document.getElementById("myAudio");
const pla=document.getElementById("playBtn");
const nextbtn=document.getElementById("nextBtn");
const msg=document.getElementById("mssg");
const re=document.getElementById("rewind");
const imga=document.getElementById("myimage");
const volm=document.getElementById("volume");
const mute=document.getElementById("mute");
const loop=document.getElementById("loop");
const onimg=document.querySelectorAll(".son");
const onhindimg=document.querySelectorAll(".hind");

const images=["binding.jpg","i thik love.jpg","die.jpg","expresso.jpg","let me.jpg","nolie.jpg","one of the firl.jpg","popular.jpg","shinonuga.jpg","starboy.jpg","summer.jpg","tosweet.jpg","Screenshot 2025-12-26 133916.png","night.jpg"];
const songs = [
  { name: "Binding_Light", src: "Blinding Lights_spotdown.org.mp3" },
  { name: "I_Think_They_Call_This_Love", src: "I Think They Call This Love - Cover_spotdown.org.mp3" },
  { name: "Die_For_You", src: "Die For You_spotdown.org.mp3" },
  { name: "Espresso", src: "Espresso_spotdown.org.mp3" },
  { name: "Let Me Love You", src: "Let Me Love You_spotdown.org.mp3" },
  { name: "No Lie_", src: "No Lie_spotdown.org.mp3" },
  { name: "One Of The Girls", src: "One Of The Girls (with JENNIE, Lily Rose Depp)_spotdown.org.mp3" },
  { name: "Popular", src: "Popular (with Playboi Carti & Madonna) - From The Idol Vol. 1 (Music from the HBO Original Series)_spotdown.org.mp3" },
  { name: "Shinunoga E-Wa", src: "Shinunoga E-Wa_spotdown.org.mp3" },
  { name: "Star_Boy", src: "Starboy_spotdown.org.mp3" },
  { name: "Summertime Sadness", src: "Summertime Sadness_spotdown.org.mp3" },
  { name: "Too Sweet", src: "Too Sweet_spotdown.org.mp3" },
  {name:"Everything_I_Do",src:"(Everything I Do) I Do It For You_spotdown.org.mp3"},
  {name:"Night_Changes",src:"Night Changes_spotdown.org.mp3"}
];
const hindsongs=[
  {name:"Tu_Hai_Kahan", src:"Tu_haikahan.mp4", imgaa:"tuhai.png"}
];
const hindimgs=["tuhai.png"];
let index = 0;

// Load song
function loadSong(i) {
  audio.src = songs[i].src;
  msg.textContent = songs[i].name;
  imga.src=images[i];
}
onhindimg.forEach((hindimg,iin)=>{
  hindimg.addEventListener("click",()=>{
    audio.src=hindsongs[iin].src;
    msg.textContent = hindsongs[iin].name;
    imga.src=hindimgs[iin];
    playBtn.textContent = "⏸ Pause";
    audio.play();
  });
});
onimg.forEach((img,indexs)=>{
  img.addEventListener("click",()=>{
    audio.src=songs[indexs].src;
    msg.textContent = songs[indexs].name;
    imga.src=images[indexs];
    playBtn.textContent = "⏸ Pause";
    audio.play();
  });
});


// Play / Pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸ Pause";
  } else {
    audio.pause();
    playBtn.textContent = "▶ Play";
  }
});
//HindiPanel Ke Liye
const hinpanel=document.getElementById("hindipanel");
document.getElementById("hindi").onclick=()=>{
  hinpanel.classList.add("active");
};
document.getElementById("clase").onclick=()=>{
  hinpanel.classList.remove("active");
};
//EnglishPanel ke Liye
const panel = document.getElementById("panel");

document.getElementById("open").onclick = () => {
  panel.classList.add("active");
};

document.getElementById("close").onclick = () => {
  panel.classList.remove("active");
};
//Phonk Panel Ke Liye
const phpanel=document.getElementById("phonkpanel");
document.getElementById("phonk").onclick=()=>{
  phpanel.classList.add("active");
};
document.getElementById("phonkclose").onclick=()=>{
  phpanel.classList.remove("active");
}



re.addEventListener("click",()=>{
  audio.currentTime=0;
  audio.play();
});
volm.addEventListener("input",()=>{
  audio.volume=volm.value;
});
mute.addEventListener("click",()=>{
  audio.muted=!audio.muted;
});
loop.addEventListener("click",()=>{
  if(!audio.loop){
    audio.loop=true;
    loop.innerHTML="LoopON";
  }else{
    audio.loop=false;
    loop.innerHTML="⋈";
  }
});

// Next song
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= songs.length) index = 0;
  loadSong(index);
  audio.play();
  playBtn.textContent = "⏸ Pause";
});

// Previous song
prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = songs.length - 1;
  loadSong(index);
  audio.play();
  playBtn.textContent = "⏸ Pause";
});

// Auto next when song ends
audio.addEventListener("ended", () => {
  nextBtn.click();
});

// First load
loadSong(index);
