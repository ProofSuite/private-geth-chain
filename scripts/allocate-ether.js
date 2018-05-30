function allocateEther() {
  var accounts = personal.listAccounts
  eth.sendTransaction({ from: accounts[0], to: accounts[1], value: 100e18 })
  eth.sendTransaction({ from: accounts[0], to: accounts[2], value: 100e18 })
  eth.sendTransaction({ from: accounts[0], to: accounts[3], value: 100e18 })
  eth.sendTransaction({ from: accounts[0], to: accounts[4], value: 100e18 })
  eth.sendTransaction({ from: accounts[0], to: accounts[5], value: 100e18 })
  eth.sendTransaction({ from: accounts[0], to: accounts[6], value: 100e18 })
  eth.sendTransaction({ from: accounts[0], to: accounts[7], value: 100e18 })
  eth.sendTransaction({ from: accounts[0], to: accounts[8], value: 100e18 })
  eth.sendTransaction({ from: accounts[0], to: accounts[9], value: 100e18 })
}
