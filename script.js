function readMore() {
    var info1 = document.getElementById("para1");
    var myBtn = document.getElementById("btn");
    info1.classList.toggle("hidden")
    info1.classList.toggle("show")

    if (info1.classList.contains("hidden")){
        myBtn.innerText = "Read More";
    }
    else { 
    myBtn.innerText= "Read Less";
    }
}

function readMore2() {
    var info2 = document.getElementById("para2");
    var myBtn2 = document.getElementById("btn2");
    info2.classList.toggle("hidden")
    info2.classList.toggle("show")

    if (info2.classList.contains("hidden")){
        myBtn2.innerText = "Read More";
    }
    else { 
    myBtn2.innerText= "Read Less";
    }
}
