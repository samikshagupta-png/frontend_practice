console.log("welcome to spotify");
let songindex=0;
let audioelement = new Audio('1.mp3');
let gif = document.getElementById('gif');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let songitems=Array.from(document.getElementsByClassName('songitem'));


let songs=[
    {songname:"baby" , filepath:"1.mp3" , coverpath:"song.jpeg"},
    {songname:"chalisa" , filepath:"2.mp3" , coverpath:"song.jpeg"},
    {songname:"baby" , filepath:"3.mp3" , coverpath:"song.jpeg"},
    {songname:"rhtdm" , filepath:"4.mp3" , coverpath:"song.jpeg"},
    {songname:"baby" , filepath:"5.mp3" , coverpath:"song.jpeg"},
    {songname:"chalisa" , filepath:"6.mp3" , coverpath:"song.jpeg"},
    {songname:"baby" , filepath:"7.mp3" , coverpath:"song.jpeg"},
    {songname:"chalisa" , filepath:"8.mp3" , coverpath:"song.jpeg"},
    {songname:"baby" , filepath:"9.mp3" , coverpath:"song.jpeg"}
    
    
]
// Loop over DOM nodes, not song objects
songitems.forEach((element, i) => {
    // item.getElementsByTagName("img")[0].src = songs[i].coverpath;
    // item.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
});

masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');  
        gif.style.opacity=0;
    }
})
// listen to events
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime =(myprogressbar.value * audioelement.duration)/100;

})
const makeallplay= () =>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // audioelement.src=`${index+1}.mp3`;
        audioelement.src = songs[songindex].filepath;
        audioelement.currentTime=0;
        audioelement.play();
         masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');


    })
});
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>8){
        songindex=0;
    }
    else{
        songindex +=1;
    }
    // audioelement.src=`${index+1}.mp3`;
    audioelement.src = songs[songindex].filepath;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -=1;
    }
    audioelement.src=`${songindex+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})