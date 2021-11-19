const menuHam = document.querySelector("#btnHamburger");
const menuIcon = document.querySelector("#imgHamburger");
const nav = document.querySelector(".navigation");

const accordion = document.querySelectorAll(".category");
for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active")
    })
}

menuHam.addEventListener("click", ()=> {
    nav.classList.toggle("show");
    if(nav.className === "navigation show"){
        menuIcon.src = "build/img/icon-close.svg"
    } else{
        menuIcon.src = "build/img/icon-hamburger.svg"
    }
});