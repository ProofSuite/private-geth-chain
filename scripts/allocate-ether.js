function allocateEther() {
  var accounts = personal.listAccounts
  eth.sendTransaction({ from: accounts[0], to: accounts[1], value: 1000e18 })
  eth.sendTransaction({ from: accounts[0], to: accounts[2], value: 1000e18 })
  eth.sendTransaction({ from: accounts[0], to: accounts[3], value: 1000e18 })
}