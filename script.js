var time= 60;
let random_numb,pop_song,background_music
let board=document.querySelector(".board")
let hit=0
let scoreVal=0
let gameover=false
pop_song=new Audio();
background_music=new Audio();
background_music.src="./gamemusic-6082.mp3"
background_music.loop=true
pop_song.src="./bang-43964.mp3"
// for displaying balloons with there colors
function display_Balloons(){
for (let index = 0; index < 55; index++) {
    random_numb=Math.floor(Math.random()*10)
    board.innerHTML+=`<div class="balloon" id="balloon${random_numb}">${random_numb}</div>`
}
}
function run_timer(){
    var timer=setInterval(function(){
        if(time>0)
        {
            time--
            document.querySelector("#timer").textContent=time
        }
        else{
            clearInterval(timer)
            board.innerHTML=`<h1>Game Over Janu😉😎</h1>`
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
function balloon_checker(){
    let count=0;
    Array.from(document.querySelector(".board").getElementsByClassName("balloon")).forEach((e) => {
        if(Number(e.innerHTML)==hit)
        {
            count++;
        }
    })
    if(count==1)
        {
            get_hit_baloon();
        }
}
function main(){
    display_Balloons()
    get_hit_baloon()
    balloon_checker()
    run_timer()
    board.addEventListener("click",(e)=>{
        background_music.play()
        balloon_checker()
        if(Number(e.target.textContent)==hit)
            {
            pop_song.play();
            e.target.style.display="none"
            get_hit_baloon();
            score_increaseing();
            display_Balloons();
        }
    })
}
main()