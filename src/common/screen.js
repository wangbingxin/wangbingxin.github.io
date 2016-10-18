var screenWidth=document.body.clientWidth;
var FontSize=screenWidth/7.5+"px";
console.log(FontSize);
document.getElementsByTagName("html")[0].style.fontSize=FontSize;
document.body.style.width=7.5+"rem";