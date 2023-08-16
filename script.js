const BtnBoxEl = document.querySelectorAll(".btn");
console.log(BtnBoxEl );
// open model

for (let i = 0; i <BtnBoxEl.length; i++) {
  BtnBoxEl[i].addEventListener("click", function () {
    document.querySelector(".box").classList.remove("hidden");
  });
}
document.querySelector('.closebtn').addEventListener('click',function(){
      document.querySelector(".box").classList.add("hidden"); 
})
// const startbtn=document.querySelectorAll('.start')
// console.log(startbtn );
// for (let i=0;i<startbtn.length-1;i++)
document.querySelector('#open1').addEventListener('click',function(){
    document.querySelector('.openbbtn').classList.remove('hidebtn')
    document.querySelector('.openbbtn3').classList.add('hidebtn')
    document.querySelector('.openbbtn2').classList.add('hidebtn')
  })
  document.querySelector('#open2').addEventListener('click',function(){
    document.querySelector('.openbbtn2').classList.remove('hidebtn')
    document.querySelector('.openbbtn').classList.add('hidebtn')
    document.querySelector('.openbbtn3').classList.add('hidebtn')
  })
  document.querySelector('#open3').addEventListener('click',function(){
    document.querySelector('.openbbtn3').classList.remove('hidebtn')
    document.querySelector('.openbbtn').classList.add('hidebtn')
    document.querySelector('.openbbtn2').classList.add('hidebtn')

  })
const submitbutton = document.querySelectorAll(".btncontinue");
console.log(submitbutton);
// open model

for (let i = 0; i <submitbutton.length; i++) {
  submitbutton[i].addEventListener("click", function () {
 document.querySelector(".submitbox").classList.remove("submithidden");
 document.querySelector(".box").classList.add("hidden");
  });
}
document.querySelector('.submitbox ').addEventListener('click',function(){
  document.querySelector(".submitbox").classList.add("submithidden"); 
})