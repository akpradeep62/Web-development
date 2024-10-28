const hrs = document.querySelector('.hrs');
const mins =document.querySelector('.min');
const secs =document.querySelector('.secs');


setInterval(runclock,1000)

function runclock(){
    const time = new Date();
    const seconds = time.getSeconds()/60;
    const minutes = (seconds+time.getMinutes())/60;
    const hours = (minutes+time.getHours())/12;
    hrs.style.setProperty('--rotation',hours*360);
    mins.style.setProperty('--rotation',minutes*360);
    secs.style.setProperty('--rotation',seconds*360)
}

runclock();