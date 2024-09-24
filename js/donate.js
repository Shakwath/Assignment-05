

// History Button and Donation button
document.getElementById("btn-history").addEventListener("click", function () {
  viewHideToggle("history-section");
  const historyButton = document.getElementById("btn-history");
  historyButton.classList.add(
    "px-5",
    "py-2",
  );
  const donateButton = document.getElementById("btn-donate");
  donateButton.classList.remove(
    "px-5",
    "py-2",
  );
  donateButton.classList.add(
    "px-5",
    "py-2",
  );
});

document.getElementById("btn-donate").addEventListener("click", function () {
  viewHideToggle("donation-sections");

  const historyButton = document.getElementById("btn-history");
  const donateButton = document.getElementById("btn-donate");

  historyButton.classList.remove(
    "px-5",
    "py-2",
  );
  historyButton.classList.add(
    "px-5",
    "py-2",
  );
  donateButton.classList.add(
    "px-5",
    "py-2",
  );
});

// card -01
document
  .getElementById("donate-btn1")
  .addEventListener("click", function () {
    const addMoney = getValueByIdFromInput("first-donation-field");

    const donarBalance = donationValueAmount("main-balance");

    if (addMoney > donarBalance) {
      alert("you don't have sufficient balance");
      return;
    }
    if (addMoney <= 0) {
      alert("please Give Correct value");
      return;
    }

    if (isNaN(addMoney)) {
      alert("Wrong!This is not a Valid Number");
      return;
    }

    const getMoney = donationValueAmount("total-donate1");

    const donaterBalanceISNow = donarBalance - addMoney;

    document.getElementById("main-balance").innerText = donaterBalanceISNow;

    const totalDonationGetNuakhali = addMoney + getMoney;
    document.getElementById("total-donate1").innerText =
      totalDonationGetNuakhali;
    //pop up Button
    document.getElementById("popup").classList.remove("hidden");
    document
      .getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });
    // Transaction section
    const div = document.createElement("div");

    div.innerHTML = `
            <p class ='p-3'> You donate ${addMoney} tk for <span class ="text-green-500 font-semibold"> Nuakhaki</span>, Transaction date is ${new Date().toLocaleDateString()}</p>
        
        `;
    document.getElementById("transaction-container").appendChild(div);
  });

//card -02

document
  .getElementById("donate-btn2")
  .addEventListener("click", function () {
    const inputMoney = getValueByIdFromInput("second-donation-field");
    const donarBalance = donationValueAmount("main-balance");

    if (inputMoney > donarBalance) {
      alert("you don't have sufficient balance");
      return;
    }
    if (inputMoney <= 0) {
      alert("please Give Correct value");
      return;
    }
    if (isNaN(inputMoney)) {
      alert("Wrong!This is not a Valid Number");
      return;
    }

    //function calculate

    const feniHasBalance = donationValueAmount("total-donate2");

    const donaterBalanceISNow = donarBalance - inputMoney;

    document.getElementById("main-balance").innerText = donaterBalanceISNow;

    const totalDonationGetFeni = inputMoney + feniHasBalance;
    document.getElementById("total-donate2").innerText =
      totalDonationGetFeni;

    //pop up 
    document.getElementById("popup").classList.remove("hidden");
    document
      .getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });
    // Transaction section 
    const div = document.createElement("div");

    div.innerHTML = `
                <p class ='p-3'> You donate ${inputMoney} tk for <span class ="text-blue-500 font-semibold">Feni</span>, Transaction date is ${new Date().toLocaleDateString()}</p>
            `;
    document.getElementById("transaction-container").appendChild(div);
  });

//card - 03

document
  .getElementById("donate-btn3")
  .addEventListener("click", function () {
    const donateForStudent = getValueByIdFromInput("third-donation-field");
    const donarBalance = donationValueAmount("main-balance");

    if (donateForStudent > donarBalance) {
      alert("you don't have sufficient balance");
      return;
    }
    if (donateForStudent <= 0) {
      alert("please Give Correct value");
      return;
    }
    if (isNaN(donateForStudent)) {
      alert("Wrong!This is not a Valid Number");
      return;
    }

    //function calculate

    const balanceIsNow = donationValueAmount("total-donate3");

    const donaterBalanceISNow = donarBalance - donateForStudent;

    document.getElementById("main-balance").innerText = donaterBalanceISNow;

    const totalDonationStudentHas = donateForStudent + balanceIsNow;
    document.getElementById("total-donate3").innerText =
      totalDonationStudentHas;

    //pop up
    document.getElementById("popup").classList.remove("hidden");
    document
      .getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });
    // Transaction section 
    const div = document.createElement("div");

    div.innerHTML = `
                <p class ='p-3'> You donate ${donateForStudent} tk for <span class ="text-red-600 font-bold">Quota Movement</span>, Transaction date is ${new Date().toLocaleDateString()}</p>
            `;
    document.getElementById("transaction-container").appendChild(div);
  });