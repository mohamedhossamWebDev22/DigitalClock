function updateTime() {
    const date = new Date();
    
    const hour = (date.getHours());
    const minutes = (date.getMinutes());
    const seconds = (date.getSeconds());



    txt.innerText= `${hour} : ${minutes} : ${seconds}`
}

setInterval(updateTime, 1000);

const aud = document.getElementById("alaSound");

let txt = document.getElementById("clock"),
    btn = document.getElementById("btn");

btn.onclick = function () {
    let alarmBtn = prompt("بعد كم دقيقة عايزه يرن؟؟"),
        sec = ((alarmBtn * 60)* 1000);

    console.log(sec);

    setTimeout(() => {
        aud.play();
        alert("Alaaaaaaaarm!!");
    }, sec);
}