const mainContainer = document.querySelector(".aside");
    console.log(mainContainer);


window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY
    if (scrollPos > 300){
        mainContainer.classList.add("red"); 
    }else{
        mainContainer.classList.remove("red"); 
    }
    
})
console.log("scrollPos");    