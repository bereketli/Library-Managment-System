const btnBorrowBook=document.querySelector('#btnBorrowBook')
const btnReturnBook=document.querySelector('#btnReturnBook')
const student_ID=document.querySelector('#student_ID')
const book_ID=document.querySelector('#book_ID')
const popupWindow=document.querySelector('.popup-window')
const btnClosePopup=document.querySelector('.closebtn')
const btnBorrowFormSubmit=document.querySelector('#btnBorrowFormSubmit')
const notenough=document.querySelector('#notenough')



const student_IDReturn=document.querySelector('#student_IDReturn')
const book_IDReturn=document.querySelector('#book_IDReturn')
const returnPopupWindow=document.querySelector('.popup-window2')
const btnClosePopupReturn=document.querySelector('.closebtnReturn')
const btnReturnFormSubmit=document.querySelector('#btnReturnFormSubmit')

async function registerborrow(){
    fetch(`http://localhost:3000/liberarist/addborrowbook`,{
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            student_ID:student_ID.value,
            book_ID:book_ID.value
            
            

        })
    }).then(response=>response.text()).then(data=>{
        notenough.textContent=data
    })
    }             


btnBorrowBook.addEventListener('click',()=>{
    popupWindow.classList.remove('hidden')
})

btnClosePopup.addEventListener('click',()=>{

    popupWindow.classList.add('hidden')
})

btnBorrowFormSubmit.addEventListener('click',()=>{
    console.log("this is china")
    registerborrow()
    student_ID.value=book_ID.value=''
})


async function registerreturned(){
    fetch(`http://localhost:3000/liberarist/returnbook`,{
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            student_ID:student_IDReturn.value,
            book_ID:book_IDReturn.value
        })
    })
    }             


btnReturnBook.addEventListener('click',()=>{
    returnPopupWindow.classList.remove('hidden')
})

btnClosePopupReturn.addEventListener('click',()=>{
 returnPopupWindow.classList.add('hidden')
})

btnReturnFormSubmit.addEventListener('click',()=>{
    registerreturned()
    student_IDReturn.value=book_IDReturn.value=''
})
