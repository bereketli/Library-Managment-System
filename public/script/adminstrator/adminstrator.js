const title= document.querySelector('#title')
const author= document.querySelector('#author')
const gener= document.querySelector('#gener')
const published_date= document.querySelector('#publish-date')
const bookID= document.querySelector('#bookID')
const stored= document.querySelector('#number')
const btnCreateBook=document.querySelector('#btnAddBook')
const btnCreateLiberarist=document.querySelector('#btnAddLiberarist')
const btnCreateAdminstrator=document.querySelector('#btnAddAdminstrator')
const btnCreateStudent=document.querySelector('#btnAddStudent')
const btnAddBook=document.querySelector('#btnform-submit')
const btnAddLiberarsit=document.querySelector('#btnform-submit2')
const btnAddStudent=document.querySelector('#btnform-submit3')
const popupWindow=document.querySelector('.popup-window')
const popupWindow2=document.querySelector('.popup-window2')
const popupWindow3=document.querySelector('.popup-window3')
const btnClosePopup=document.querySelector('.closebtn')
const btnClosePopup2=document.querySelector('.closebtn2')
const btnClosePopup3=document.querySelector('.closebtn3')

const liberaristfirst_name=document.querySelector('#liberaristfirst_name')
const liberaristfather_name=document.querySelector('#liberaristfather_name')
const liberaristaddress=document.querySelector('#liberaristaddress')
const liberaristemail=document.querySelector('#liberaristemail')
const liberaristphone_number=document.querySelector('#liberaristphone_number')
const liberaristpass_key=document.querySelector('#liberaristpass_key')
const liberaristID=document.querySelector('#liberaristID')
const liberaristbtnSubmit=document.querySelector('#liberaristbtnform-submit')

const studentfirst_name=document.querySelector('#studentfirst_name')
const studentfather_name=document.querySelector('#studentfather_name')
const studentemail=document.querySelector('#studentemail')
const studentphone_number=document.querySelector('#studentphone_number')
const studentID=document.querySelector('#studentID')



async function registerBook(){
    fetch(`http://localhost:3000/adminPage/addbook`,{
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            title:title.value,
            author:author.value,
            gener:gener.value,
            published_date:published_date.value,
            bookID:bookID.value,
            stored:stored.value
            

        })
    }).then((response)=>response.json()
        )
      .then(function(response) {
        console.log(response);
      })
      .catch(error => console.log("there was an error --> " + error));
        
    }
  
async function registerliberarist(add){
      fetch(`http://localhost:3000/adminPage/addadminstrator`,{
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              first_name:liberaristfirst_name.value,
              father_name:liberaristfather_name.value,
              address:liberaristaddress.value,
              email:liberaristemail.value,
              pass_key:liberaristpass_key.value,
              phone_number:liberaristphone_number.value,
              ID:liberaristID.value
              
  
          })
      }).then((response)=>response.json()
          )
        .then(function(response) {
          console.log(response);
        })
        .catch(error => console.log("there was an error --> " + error));
      }   
async function registerstudent(){
        fetch(`http://localhost:3000/adminPage/addstudent`,{
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                first_name:studentfirst_name.value,
                father_name:studentfather_name.value,
                email:studentemail.value,
                phone_number:studentphone_number.value,
                ID:studentID.value
                
    
            })
        })
        }             
console.log(btnAddBook)
btnCreateBook.addEventListener('click',()=>{
    
   popupWindow.classList.remove('hidden')
})
btnCreateLiberarist.addEventListener('click',()=>{
  popupWindow2.classList.remove('hidden')
})
btnClosePopup.addEventListener('click',()=>{
    popupWindow.classList.add('hidden')
})
let admin=false
btnCreateAdminstrator.addEventListener('click',()=>{
  popupWindow2.classList.remove('hidden')
  admin=true
})
btnClosePopup2.addEventListener('click',()=>{
  popupWindow2.classList.add('hidden')
})
btnAddBook.addEventListener('click',()=>{
    registerBook()
    title.value=author.value=gener.value=published_date.value=
    bookID.value=stored.value=''
})
btnAddLiberarsit.addEventListener('click',()=>{
  if(admin){
    registerliberarist('addadminstrator') 
  }
  registerliberarist('addliberarist')
  liberaristfirst_name.value=liberaristfather_name.value=liberaristaddress.value=liberaristemail.value=
  liberaristpass_key.value=liberaristphone_number.value=liberaristID.value=''

})
// btnAddAdminstrator.addEventListener('click',()=>{
//   console.log('adding addmin')
//   registerliberarist('addadminstrator')
//   liberaristfirst_name.value=liberaristfather_name.value=liberaristaddress.value=liberaristemail.value=
//   liberaristpass_key.value=liberaristphone_number.value=liberaristID.value=''
// })

btnCreateStudent.addEventListener('click',()=>{
  popupWindow3.classList.remove('hidden')
})
btnClosePopup3.addEventListener('click',()=>{
    popupWindow3.classList.add('hidden')
})
btnAddStudent.addEventListener('click',()=>{
  registerstudent()
  studentfirst_name.value=studentfather_name.value=studentemail.value=
  studentphone_number.value=studentID.value=''
})

