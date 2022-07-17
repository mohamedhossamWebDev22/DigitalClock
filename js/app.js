function updateTime() {
    const date = new Date();

    const hour = (date.getHours());
    const minutes = (date.getMinutes());
    const seconds = (date.getSeconds());



    txt.innerText= `${hour} : ${minutes} : ${seconds}`
}

setInterval(updateTime, 1000);

let txt = document.getElementById("clock");