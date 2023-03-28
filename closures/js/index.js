
function closure(){
  let obj = [
    { 'Account_no': 967710110006162, 'card_no': 19, 'pin': 9088, 'Acc_Bal': 2500 },
    { 'Account_no': 967710110006192, 'card_no': 92, 'pin': 9008, 'Acc_Bal': 1900 },
    { 'Account_no': 967710110006160, 'card_no': 72, 'pin': 9788, 'Acc_Bal': 1990 },
    { 'Account_no': 967710110006161, 'card_no': 29, 'pin': 9688, 'Acc_Bal': 100 },
    { 'Account_no': 967710110006163, 'card_no': 62, 'pin': 9588, 'Acc_Bal': 590 },
  ];
// function to withdraw
function withdraw(card_no, pin, Amt) {
  let found = 0;
      for (let temp in obj) {
        if (obj[temp].card_no == card_no && obj[temp].pin == pin) {
          console.log("Process Starts....");
          if (obj[temp].Acc_Bal >= Amt) {
            obj[temp].Acc_Bal = obj[temp].Acc_Bal-Amt;
            console.log("Withdrawn  " +Amt +" successful .Updated-Balance :" + obj[temp].Acc_Bal);
          }
          else{
            console.log("Insufficient Balance");
          }
          found = 1;
          break;
        }
      }
      if (found == 0) {
        console.log("Account not found");
      }
    }


// function to deposit
function deposit(card_no, pin, Amt) {
  let found = 0;
      for (let temp in obj) {
        if (obj[temp].card_no == card_no && obj[temp].pin == pin) {
          console.log("Process Starts....");
          obj[temp].Acc_Bal += Amt;
          console.log("Deposited "+ Amt +" Successfully Account-Balance :" + obj[temp].Acc_Bal);
          found = 1;
          break;
        }
      }
      if(found==0){
        console.log("updated balance");
      }
}

while (true) {
  console.log("BANKING");
  console.log("Enter operation to be performed:");
  console.log("1. Withdraw");
  console.log("2. Deposit");

  let operation = parseInt(prompt("Enter your choice (1 or 2)"));

  if (operation === 1 || operation === 2) {
    let card_no = parseInt(prompt("Enter card no"));
    let pin = parseInt(prompt("Enter your pin"));
    let amt = parseInt(prompt("Enter the amount"));

    if (operation === 1) {
      withdraw(card_no, pin, amt);
    } else {
      deposit(card_no, pin, amt);
    }
  } else {
    console.log("Invalid operation selected.");
  }
}

}


closure();