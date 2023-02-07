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