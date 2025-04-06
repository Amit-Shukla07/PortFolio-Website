var tablinks = document.getElementsByClassName('tablinks');
var tabcontents = document.getElementsByClassName('tabcontents');
const buttons = document.querySelectorAll(".click-btn");

function openTab(tabname,event){
    for( let tablink of tablinks){
        tablink.classList.remove('ActiveLinks');
    }

    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('ActiveTab');
    }
    event.currentTarget.classList.add('ActiveLinks')

    document.getElementById(tabname).classList.add('ActiveTab');
}



var sidemenu = document.getElementById("sidemenu");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        closemenu();
    });
});

function openmenu(){
   sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-250px";
}
