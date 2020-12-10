const trans = document.querySelector(".trasaction-area");

//login btn event handalar
const loginBtn = document.querySelector('#login');
loginBtn.addEventListener('click',function(){
   const loginArea =   document.querySelector('#login-page');
   loginArea.style.display="none";
   trans.style.display="block";
})

//deposite btn event handalar
const depositeBtn = document.querySelector("#addDeposite");
depositeBtn.addEventListener('click' , function(){
   let depositeAmount = document.querySelector("#depositeAmount").value;
            depositeTaka  = parseFloat(depositeAmount);
          
   let currentDeposite = document.querySelector("#currentDeposite").innerText;
        currentTaka = parseFloat(currentDeposite);

   let total = depositeTaka + currentTaka;
   // console.log(total);
  document.querySelector("#currentDeposite").innerText =total;
  document.querySelector("#depositeAmount").value = "";

  const totalBalace = document.querySelector("#balance").innerText;
  const currentdollar = document.querySelector("#currentDeposite").innerText;

            totalAmount = parseFloat(totalBalace) + parseFloat(currentdollar);
            console.log(totalAmount);
   document.querySelector("#balance").innerText =totalAmount;
})



//withdraw btn 
document.querySelector("#withdraw").addEventListener("click",function(){
   let withdrawAmount = document.querySelector("#withdrawAmount").value;
   let withdrawSection = document.querySelector("#withdrawSection").innerText;
   document.querySelector("#withdrawSection").innerText = parseFloat( withdrawAmount)+parseFloat( withdrawSection);

  let totalBalace = document.querySelector("#balance").innerText;
  document.querySelector("#balance").innerText = parseFloat( totalBalace) - parseFloat( withdrawAmount);
  document.querySelector("#withdrawAmount").value = "";


})