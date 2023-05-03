let btnMarca = document.getElementById("btn-marca"); 
let btnMarketing = document.getElementById("btn-marketing");
let btnCampaign = document.getElementById("btn-campaign"); 
let btnRedes = document.getElementById("btn-redes");
let btnWeb = document.getElementById("btn-web"); 
let btnComunityManager = document.getElementById("btn-comunityManager");
let btnGraphicDesign = document.getElementById("btn-graphicDesign"); 
let btnAppDev = document.getElementById("btn-appDev"); 

let buttons = [btnMarca,btnMarketing,btnCampaign,
    btnRedes,btnWeb,btnComunityManager,btnGraphicDesign,btnAppDev];


for (let i=0; i<buttons.length; i++){
    let currentBtn = buttons[i];
    currentBtn.addEventListener("click",function(){
        this.classList.toggle("btn-selected");
        if(window.innerWidth<=992){
            const mouseOut = new Event("mouseout");
            this.dispatchEvent(mouseOut);
            this.classList.toggle("btn-outline-light");
        }
       
    });

}



