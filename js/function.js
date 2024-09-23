// function getMoney(id) {
//     const inputAmount = parseFloat(document.getElementById(id).value);
//     return inputAmount;
//   }
  
//   function setMoney(id) {
//     const donateElement = parseFloat(document.getElementById(id).innerText);
//     return donateElement;
//   }
//   function totalAmount(id) {
//     const amnt = parseFloat(document.getElementById(id).value);
//     const amount = parseFloat(document.getElementById("total-amount").innerText);
//     if (amnt > amount || isNaN(amnt) || amnt <= 0) {
//       alert("Please enter a valid donation amount.");
//       return 0;
//     }
document.getElementById('home-btn').addEventListener('click', function(){
    window.location = 'index.html';
});