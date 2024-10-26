const days = document.querySelector('#days');
const hours  = document.querySelector('#hours');
const minitues  = document.querySelector('#minitues');
const seconds = document.querySelector('#seconds');

function UpdateTime(){
    const current_year = new Date().getFullYear();
    const newYear =new Date(`october 31 ${current_year} 00:00:00`);
    const currentdate = new Date();
    const diff = newYear -currentdate;
    const day = Math.floor(diff/1000/60/60/24);
    const hour = Math.floor((diff/1000/60/60)%24);
    const min = Math.floor((diff/1000/60)%60);
    const s = Math.floor((diff/1000)%60);
    days.innerHTML=day;
    hours.innerHTML=hour;
    minitues.innerHTML=min;
    seconds.innerHTML=s;
    
}
setInterval(UpdateTime,1000);





