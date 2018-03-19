function padTokens(s, n) {
  var o = s.toPrecision(n);
  while (o.length < n) {
    o = " " + o;
  }
  return o;
}

function padEthers(s) {
  var o = s.toFixed(18);
  while (o.length < 27) {
    o = " " + o;
  }
  return o;
}

function checkAllBalances() {
  var abi = []
  var address = "0x0";
  var tokenContract = eth.contract(abi).at(address);
  var contractTotal = 0;
  var ethersTotal = 0;

  console.log("  #     Account                                    Tokens                          ethers");
  console.log("------- ------------------------------------------ ---------- ---------------------------");
  var i =0;
  eth.accounts.forEach( function(e){
    var tokens = tokenContract.balanceOf(e) / parseFloat(1e18);
    contractTotal += parseFloat(tokens);
    var ethers = web3.fromWei(eth.getBalance(e), "ether");
    ethersTotal += parseFloat(ethers);
    console.log("  " + i + "\t" + e + " " + padTokens(tokens, 10) + " " + padEthers(ethers));
    i++;
  })
  console.log("------- ------------------------------------------ ---------- ---------------------------");
  console.log("  " + i + "                                               " + padTokens(contractTotal, 10) + " " + padEthers(ethersTotal));
};
