 var navBar=document.querySelector(".navigator")
 const search=document.querySelector(".search")
 const btnSearch=document.querySelector(".btn-search")
 btnSearch.addEventListener("click",function(){
     console.log(search.value)
 })
 var middle=document.querySelector(".middle")
var navPosition = navBar.offsetTop;
//  let navPosition=navBar.getBoundingClientRect().top;
window.addEventListener("scroll",function(e){
if(window.scrollY>navPosition+35)
{
    middle.classList.add("middle")
    navBar.classList.add("sticky")
}
else
{
    navBar.classList.remove("sticky")
}

})
