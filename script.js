let soundOn = false;
let vibrationOn = false;

function toggleSound(){ soundOn = !soundOn; }
function toggleVibration(){ vibrationOn = !vibrationOn; }

/* FAKE BUY NOTIFICATIONS */
const names = ["Whale","Alpha","Trader","MoonBoy"];
setInterval(()=>{
let amount = (Math.random()*5).toFixed(2);
console.log(names[Math.floor(Math.random()*names.length)]+" bought "+amount+" SOL");
},4000);

/* LEADERBOARD */
const leaderboard = document.getElementById("leaderboard");
for(let i=1;i<=5;i++){
let li = document.createElement("li");
li.innerText = "Wallet_"+i+" - "+(Math.random()*100).toFixed(2)+" SOL";
leaderboard.appendChild(li);
}

/* GAME */
const game = document.getElementById("game");
setInterval(()=>{
let r = document.createElement("div");
r.innerText="🪳";
r.style.position="absolute";
r.style.left=Math.random()*90+"%";
r.style.top=Math.random()*80+"%";
r.onclick=()=>{
r.remove();
if(vibrationOn && navigator.vibrate) navigator.vibrate(30);
};
game.appendChild(r);
setTimeout(()=>r.remove(),3000);
},1000);
