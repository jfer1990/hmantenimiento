var tabletScreenWidth = 992; 
window.onscroll = function() {scrollFunction()};

// window.onscroll = function() {scrollFunction()};
// let btn = document.getElementsByClassName("navbar-toggler")[0]; 

function scrollFunction() {
  let navContainer = document.getElementById("nav-container"); 
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    if(window.innerWidth>=991){
      navContainer.classList.add("nav-scrolled");
    } 
  }
  else{
    if(window.innerWidth>=991){
      navContainer.classList.remove("nav-scrolled");
    }

    
  }
}

// //Cuando el menu se expande, el logo tiene su tamaño original
// btn.addEventListener("click",function(){
//     let navbar = document.getElementsByClassName("navbar")[0];

//     if(navbar.classList.contains("scroll-nav")){
//         navbar.classList.remove("scroll-nav");
//     }
// });

// let ul_navbar = document.querySelector(".navbar-nav");
// ul_navbar.addEventListener("click",function(event){
//   if (window.innerWidth<tabletScreenWidth){
//     let btnToggler = document.querySelector(".navbar-toggler");
//     let clickEvent = new Event("click");
//     btnToggler.dispatchEvent(clickEvent);
//   }
 
// })


let menuElements = document.getElementsByClassName("nav-item"); 
let hamburgerBtn = document.getElementsByClassName("navbar-toggler")[0]; 
for(let currentItem of menuElements){
  currentItem.addEventListener("click",function(){
    if (!hamburgerBtn.classList.contains('collapsed')){
      hamburgerBtn.click(); 
    } 
  })
}