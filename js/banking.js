function getInput(input) {
  const inputField = document.getElementById(input);
  const inputText = inputField.value;
  const inputValue = parseFloat(inputText);
  inputField.value = '';
  return inputValue;
}
function updateTotal(total, amount) {
  const totalField = document.getElementById(total);
  const totalFieldText = totalField.innerText;
  const previousTotal = parseFloat(totalFieldText);
  totalField.innerText = previousTotal + amount;
}
function getCurrentBalance() {
  const balanceField = document.getElementById('balance-total');
  const balanceFieldText = balanceField.innerText;
  const previousBalanceTotal = parseFloat(balanceFieldText);
  return previousBalanceTotal;
}
function updateBalance(amount, isTrue) {
  const balanceField = document.getElementById('balance-total');
  const previousBalance = getCurrentBalance();
  if (isTrue == true) {
    balanceField.innerText = previousBalance + amount;
  } else {
    balanceField.innerText = previousBalance - amount;
  }
}


document.getElementById('deposite-button').addEventListener('click', function () {
  const depositAmount = getInput('deposite-input');
  if (depositAmount > 0) {
    updateTotal('deposit-total', depositAmount)
    updateBalance(depositAmount, true);
  }
})

document.getElementById('withdraw-button').addEventListener('click', function () {
  const withdrawAmount = getInput('withdraw-input');
  const currentBalance = getCurrentBalance()
  if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
    updateTotal('withdraw-total', withdrawAmount)
    updateBalance(withdrawAmount, false);
  }
})
