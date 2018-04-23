
# Geth Local Setup
This repository provides a few utilities to setup a local private ethereum chain as well as a few javascript functions that can be used to interact with your local chain.

You can find a version of this private ethereum chain with cryptofiat contracts already deployed on the [cryptofiat-a](https://github.com/ProofSuite/private-geth-chain/tree/cryptofiat-a) branch of this repository.

## Requirements :
- OSX or Linux
- Geth (1.8.2-stable)
- Solidity

## Features

This local private chain comes with the following setup:
- Byzantium enabled
- High Block gas limit to simulate current network condition (it seems as though the gas limit automatically comes down after after a while)
- Websocket API

## Setup

To use the front-end test application for the cryptofiat contract, first create a private blockchain.

```
./create_geth_dev.sh
```

Start a node on the private blockchain

```
./start_geth_dev.sh
```

On a different terminal instance attach a geth process to the current to your running node

```
geth attach /path/to/geth.ipc
```

(Note: The IPC path is displayed on the logs when starting the node)

In the console, you can now download javascript utility functions and use them to manage your private chain.

```
loadScript('setup-accounts.js')
loadScript('unlock-accounts.js')
loadScript('allocate-ether.js')
```

You can start mining or stop mining with the following commands:

```
miner.start(4)
miner.stop()
```

After mining a sufficient amount of ether, you can allocate ether in order to be able to deploy the Oraclize contract
(see below).

```
allocateEther()
```

Occasionally you will need to unlock accounts

```
unlockAccounts()
```

### Testing the CryptoDollar contracts

After setting up your private chain correctly, instantiate the testnet oraclize service.
From the ProofCryptoFiat folder:

```
cd ethereum-bridge
npm install ethereum-bridge
node bridge -H localhost:8545 -a 1 --dev --update-ds
```

Write down the Oraclize Address Resolver Address (OAR) and insert it in the CryptoFiatHub contract.
Compile and migrate the CryptoFiat contracts on the development_geth network.

```
truffle compile --all
truffle migrate --reset --network development_geth
```

### Contribution

Thank you for considering helping the Proof project !

To make the Proof project truely revolutionary, we need and accept contributions from anyone and are grateful even for the smallest fixes.

If you want to help Proof, please fork and setup the development environment of the appropriate repository.
In the case you want to submit substantial changes, please get in touch with our development team on our slack channel (slack.proofsuite.com) to
verify those modifications are in line with the general goal of the project and receive early feedback. Otherwise you are welcome to fix, commit and
send a pull request for the maintainers to review and merge into the main code base.

Please make sure your contributions adhere to our coding guidelines:

- Code must adhere as much as possible to standard conventions (DRY - Separation of concerns - Modular)
- Pull requests need to be based and opened against the master branch
- Commit messages should properly describe the code modified
- Ensure all tests are passing before submitting a pull request




