let info1 = document.getElementById("para1");
let myBtn1 = document.getElementById("btn1");
myBtn1.addEventListener('click', readMore);    
function readMore() {
info1.classList.toggle("hidden")
info1.classList.toggle("show")
    if (info1.classList.contains("hidden")){
     myBtn1.innerText = "Read More";
    }
    else { 
    myBtn1.innerText= "Read Less";
    }
    }

    let info2 = document.getElementById("para2");
    let myBtn2 = document.getElementById("btn2");
    myBtn2.addEventListener('click', readMore2);    
    function readMore2() {
    info2.classList.toggle("hidden")
    info2.classList.toggle("show")
        if (info2.classList.contains("hidden")){
         myBtn2.innerText = "Read More";
        }
        else { 
        myBtn2.innerText= "Read Less";
        }
        }

let info3 = document.getElementById("para3");
let myBtn3 = document.getElementById("btn3");
myBtn3.addEventListener('click', readMore3);
function readMore3() {
    info3.classList.toggle("hidden")
    info3.classList.toggle("show")
    if (info3.classList.contains("hidden")){
        myBtn3.innerText = "Read More";
    }
    else {
    myBtn3.innerText= "Read Less";
    }
}

let info4 = document.getElementById("para4");
let myBtn4 = document.getElementById("btn4");
myBtn4.addEventListener('click', readMore4);
function readMore4() {
    info4.classList.toggle("hidden")
    info4.classList.toggle("show")
    if (info4.classList.contains("hidden")){
        myBtn4.innerText = "Read More";
    }
    else {
    myBtn4.innerText= "Read Less";
    }
}

let info5 = document.getElementById("para5");
let myBtn5 = document.getElementById("btn5");
myBtn5.addEventListener('click', readMore5);
function readMore5() {
    info5.classList.toggle("hidden")
    info5.classList.toggle("show")
    if (info5.classList.contains("hidden")){
        myBtn5.innerText = "Read More";
    }
    else {
    myBtn5.innerText= "Read Less";
    }
}