function unlockAccounts () {
  var accounts = personal.listAccounts
  for (var i = 0; i < accounts.length; i++) {
    personal.unlockAccount(accounts[i], "test", 9999)
  }
}