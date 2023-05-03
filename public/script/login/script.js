 const navBar=document.querySelector(".navigator")
 const search=document.querySelector(".search")
 const btnSearch=document.querySelector(".btn-search")
 const btnCloseWindow=document.querySelector(".closebtn")
 const popWindow=document.querySelector(".popup-window")
 const table=document.querySelector("table")
 const btnLogin=document.querySelector("#btnLogin")
 const userID=document.querySelector('#userName')
 const userPassword=document.querySelector("#userPassword")
 const warning=document.querySelector("#warning")



 
var middle=document.querySelector(".middle")
var navPosition = navBar.offsetTop;
let counter=1
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
btnCloseWindow.addEventListener('click',()=>{
    counter=1
table.textContent=''
popWindow.classList.add('hidden')
});
btnSearch.addEventListener('click',()=>{
    popWindow.classList.remove('hidden')
});

function bookList(list){
  const html=`<tr>
    <th>${counter++}</th>
    <th>${list.title}</th>
    <th>${list.author}</th>
    <th>${list.gener}</th>
    <th>${list.stored}</th>
    <th>${list.bookID}</th>
    </tr>`
table.insertAdjacentHTML("beforeend",html)
};
async function search_book(){
    fetch(`http://localhost:3000/home/data?search=${search.value}`)
   .then((response)=>response.json())
   .then((data)=>{
    data.forEach((book)=>{
    bookList(book)
           })
    })
   .catch((err)=>console.log("data is not fetched",err))

};

btnSearch.addEventListener("click",function(){
    counter=1
    table.textContent=''
        search_book();
    })

 async function identifyUser(){
    fetch(`http://localhost:3000/home/idntifyuser`,{
        method:'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({
        ID:userID.value,
        pass_key:userPassword.value
        })
    })
    .then(response=>response.text())
    .then(data=>{ 
        if(data=="liberarist")
           {
          window.location.href = "../liberarist";
           }
        else if(data=="adminstrator"){
            window.location.href="../adminPage"
        }
        else{warning.textContent=data
        console.log(data)}
    })


}






btnLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    
    identifyUser()
    
 
})


