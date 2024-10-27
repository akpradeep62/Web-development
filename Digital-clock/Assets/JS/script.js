var clock = document.querySelector(".clock");


function runclock() {
    var time= new Date();
    let hrs =time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let txt = "AM"



    if(hrs>12){
        hrs=hrs-12;
        txt = "PM"
    }else if (hrs==0){
        hrs=12;
        txt="AM"
    }
    clock.innerHTML=`${hrs}: ${mins} : ${secs} ${txt}`;
    
}

setInterval(runclock(),1000)