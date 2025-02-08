<<<<<<< HEAD
/*let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
=======
let hour = document.getElementById("hour"); 
let min = document.getElementById("min"); 
let sec = document.getElementById("sec"); 
>>>>>>> f91ec13 (Added all projects)

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

<<<<<<< HEAD
    let hRotation = 30 * hh + mm/2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);  */



















let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000); 

=======
    let hRotations = 30*hh + mm/2;
    let mRotations = 6*mm;
    let sRotations = 6*ss;

    hour.style.transform = `rotate(${hRotations}deg)`;
    min.style.transform = `rotate(${mRotations}deg)`;
    sec.style.transform = `rotate(${sRotations}deg)`;
}

setInterval(displayTime,1000);



>>>>>>> f91ec13 (Added all projects)
