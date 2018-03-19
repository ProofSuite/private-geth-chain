function createAccounts () {
  personal.importRawKey('7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712660', 'test')
  personal.importRawKey('7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712661', 'test')
  personal.importRawKey('7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712662', 'test')
  personal.importRawKey('7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712663', 'test')
  personal.importRawKey('7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712664', 'test')
  personal.importRawKey('7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712665', 'test')
  personal.importRawKey('7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712666', 'test')
  personal.importRawKey('7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712667', 'test')
  personal.importRawKey('7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712668', 'test')
  personal.importRawKey('7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712669', 'test')
}

function unlockAccounts () {
  var accounts = personal.listAccounts
  for (var i = 1; i < accounts.length; i++) {
    personal.unlockAccount(accounts[i], "test", 9999)
  }
}

function mineWhenTxPending() {
    if (eth.getBlock("pending").transactions.length > 0) {
        if (eth.mining) return;
        miner.start(1);
    } else {
        miner.stop();
    }
}


createAccounts()
unlockAccounts()

eth.filter("latest", function(err, block) { mineWhenTxPending(); });
eth.filter("pending", function(err, block) { mineWhenTxPending(); });