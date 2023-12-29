const slideShowElements=document.querySelectorAll(".slide-element");

let countElements=1;
setInterval(()=>{
    countElements++
    let currentElement=document.querySelector(".current");
    currentElement.classList.remove("current");
    if(countElements>slideShowElements.length){
        slideShowElements[0].classList.add("current");
        countElements=1;
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }
    
},2000);