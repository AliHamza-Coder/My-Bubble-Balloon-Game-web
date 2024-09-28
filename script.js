var time= 60;
let random_numb,pop_song,background_music
let board=document.querySelector(".board")
let hit=0
let scoreVal=0
let balloons=[]
pop_song=new Audio();
background_music=new Audio();
background_music.src="./gamemusic-6082.mp3"
background_music.loop=true
pop_song.src="./bang-43964.mp3"
function display_Balloons(){
    board.innerHTML=""
    balloons=[];
for (let index = 0; index < 55; index++) {
    random_numb=Math.floor(Math.random()*10)
    board.innerHTML+=`<div class="balloon" id="balloon${random_numb}">${random_numb}</div>`
    balloons.push({id:random_numb,value:random_numb})
}}
function run_timer(){
    var timer=setInterval(function(){
        if(time>0)
        {
            time--
            document.querySelector("#timer").textContent=time
        }
        else{
            clearInterval(timer)
            board.innerHTML=`<h1>Game Over 😉😎</h1>`
            background_music.pause()
        }
    },1000)
}
function get_hit_baloon(){
    var rndm=Math.floor(Math.random()*10)
    hit_value.textContent=rndm;
    hit=rndm;
}
function score_increaseing(){
    scoreVal+=10
    score.textContent=scoreVal
}
function hit_existance(){
    const existingBalloon = balloons.find(balloon => balloon.value === hit);
    if (!existingBalloon) {
        get_hit_baloon();
        hit_existance();
    }
}
function main(){
    display_Balloons()
    get_hit_baloon()
    hit_existance()
    board.addEventListener("click",(e)=>{
        background_music.play()
        if(Number(e.target.textContent)==hit)
            {
            run_timer()
            pop_song.play();
            e.target.style.display="none"
            score_increaseing();
            display_Balloons();
            get_hit_baloon();
            hit_existance();
        }
    })
}
main()