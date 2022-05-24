const navBar=document.querySelector(".navigator")

window.addEventListener("scroll",function(){
if(window.scrollY>53)
 navBar.classList.add('sticky');
 else
 navBar.classList.remove('sticky');

})
