<<<<<<< HEAD
let time = document.getElementById('time');
let timeFormat = document.getElementById('timeFormat');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(timeDisplay, 1000);
})

const timeDisplay = () =>{
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = hr<10 ? `0${hr}` : hr;
    min = min<10 ? `0${min}` : min;
    sec = sec<10 ? `0${sec}` : sec;

    time.innerHTML = `${hr} : ${min} : ${sec}`;
    timeFormat.innerHTML = hr>12 ? "PM" : "AM";
}
=======
let URL = "https://cat-fact.herokuapp.com/facts";


// Promise
function getData(){
    console.log("Getting data...")
    fetch(URL).then((response) =>{
        console.log(response);
        return response.json();
    }).then((data) =>{
        console.log(data);
    })
}

getData();


// Async & Await
// const getData = async() =>{
//     let respons = await fetch(URL);
//     console.log(respons);
//     let promise =  await respons.json();
//     console.log(promise);
//     console.log(promise[0].text);
    
// }

// getData();




/*
let time = document.querySelector(".time");
let timeFormat = document.querySelector(".timeFormat");


const timeDisplay = () => {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? `0${hh}`: hh;
    mm = (mm < 10) ? `0${mm}`: mm;
    ss = (ss < 10) ? `0${ss}`: ss;

    time.innerHTML = `${hh} : ${mm} : ${ss}`;
    timeFormat.innerHTML = (hh > 12) ? "PM" : "AM";
   
}

setInterval(timeDisplay, 1000);


*/
>>>>>>> f91ec13 (Added all projects)
