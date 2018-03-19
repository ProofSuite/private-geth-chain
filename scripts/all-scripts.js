function printBlock(block) {
  console.log("Block number     : " + block.number + "\n"
    + " hash            : " + block.hash + "\n"
    + " parentHash      : " + block.parentHash + "\n"
    + " nonce           : " + block.nonce + "\n"
    + " sha3Uncles      : " + block.sha3Uncles + "\n"
    + " logsBloom       : " + block.logsBloom + "\n"
    + " transactionsRoot: " + block.transactionsRoot + "\n"
    + " stateRoot       : " + block.stateRoot + "\n"
    + " miner           : " + block.miner + "\n"
    + " difficulty      : " + block.difficulty + "\n"
    + " totalDifficulty : " + block.totalDifficulty + "\n"
    + " extraData       : " + block.extraData + "\n"
    + " size            : " + block.size + "\n"
    + " gasLimit        : " + block.gasLimit + "\n"
    + " gasUsed         : " + block.gasUsed + "\n"
    + " timestamp       : " + block.timestamp + "\n"
    + " transactions    : " + block.transactions + "\n"
    + " uncles          : " + block.uncles);
  if (block.transactions != null) {
    console.log("--- transactions ---");
    block.transactions.forEach( function(e) {
      printTransaction(e);
    })
  }
}

function printTransaction(txHash) {
  var tx = eth.getTransaction(txHash);
  if (tx != null) {
    console.log("  tx hash          : " + tx.hash + "\n"
      + "   nonce           : " + tx.nonce + "\n"
      + "   blockHash       : " + tx.blockHash + "\n"
      + "   blockNumber     : " + tx.blockNumber + "\n"
      + "   transactionIndex: " + tx.transactionIndex + "\n"
      + "   from            : " + tx.from + "\n"
      + "   to              : " + tx.to + "\n"
      + "   value           : " + tx.value + "\n"
      + "   gasPrice        : " + tx.gasPrice + "\n"
      + "   gas             : " + tx.gas + "\n"
      + "   input           : " + tx.input);
  }
}


function getTransactionsByAccounts(myaccount, startBlockNumber, endBlockNumber) {
  if (endBlockNumber == null) {
    endBlockNumber = eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  }
  if (startBlockNumber == null) {
    startBlockNumber = endBlockNumber - 1000;
    console.log("Using startBlockNumber: " + startBlockNumber);
  }
  console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber + "\"");

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 1000 == 0) {
      console.log("Searching block " + i);
    }
    var block = eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
      block.transactions.forEach( function(e) {
        if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
          console.log("  tx hash          : " + e.hash + "\n"
            + "   nonce           : " + e.nonce + "\n"
            + "   blockHash       : " + e.blockHash + "\n"
            + "   blockNumber     : " + e.blockNumber + "\n"
            + "   transactionIndex: " + e.transactionIndex + "\n"
            + "   from            : " + e.from + "\n"
            + "   to              : " + e.to + "\n"
            + "   value           : " + e.value + "\n"
            + "   gasPrice        : " + e.gasPrice + "\n"
            + "   gas             : " + e.gas + "\n"
            + "   input           : " + e.input);
        }
      })
    }
  }
}


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

function unlockAccounts () {
  var accounts = personal.listAccounts
  for (var i = 0; i < accounts.length; i++) {
    personal.unlockAccount(accounts[i], "test", 9999)
  }
}