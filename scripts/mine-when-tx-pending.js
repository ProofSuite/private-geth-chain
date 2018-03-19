function mineWhenTxPending() {
    if (eth.getBlock("pending").transactions.length > 0) {
        if (eth.mining) return;
        miner.start(1);
    } else {
        miner.stop();
    }
}

eth.filter("latest", function(err, block) { mineWhenTxPending(); });
eth.filter("pending", function(err, block) { mineWhenTxPending(); });