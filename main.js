var prin = document.getElementById('print');
prin.addEventListener("click",()=>{
    window.print();
})
$(document).ready(function () {
    
});
const bars =  document.querySelectorAll('.progress-bar')
$(document).ready(function () {
    document.querySelectorAll('.progress-bar')

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltwip = bar.children[0];
        tooltwip.innerText = percentage + '%';
        bar.style.width = percentage + '%'
        console.log(percentage);
    });
});


var bdy = document.getElementById("body")

var dis = document.getElementById("dis");
var win = document.getElementById("win");
dis.addEventListener("click",()=>{
win.style.display = "block";
bdy.style.overflow= "hidden"
})

var close = document.getElementById("close");
close.onclick = ()=>{
    win.style.display = "none";
   bdy.style.overflow = "scroll " 
bdy.style.overflowX = "hidden"
}