function readMore() {
    console.log('here')
    var showText = document.getElementById ("para1");
    var myBtn = document.getElementById ("btn");
    console.log(showText.style.display)
    if (showText.style.display === 'none') {
        myBtn.innerHTML = "Read More";
    } else {
        showText.style.display = "inline";
        myBtn.innerHTML = "Read Less";
    }
}
  
