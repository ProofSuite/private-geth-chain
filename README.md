
# Geth Local Setup
This repository provides a few utilities to setup a local private ethereum chain as well as a few javascript functions that can be used to interact with your local chain.

The cryptodollar contracts are deployed on the [cryptofiat-a](https://github.com/ProofSuite/private-geth-chain/tree/cryptofiat-a) branch. The addresses are shown in the following section.

On the [dex](https://github.com/ProofSuite/private-geth-chain/tree/dex) branch, the contracts corresponding to the proof decentralized exchange have been deployed. The addresses are shown in a following section.

## Requirements :
- OSX or Linux
- Geth (1.8.2-stable)
- Solidity

## Features

This local private chain comes with the following setup:
- Byzantium enabled
- High Block gas limit to simulate current network condition (it seems as though the gas limit automatically comes down after after a while)
- Websocket API

## Contracts

The Cryptofiat (develop-a) contracts are deployed at the following addresses:
- **CryptoDollar**: *0x2bc811ef0dae8b1ecefe8e43664c4536e5c48bac*
- **CryptoFiatHub**: *0xc89bba87b12f6ca19652d6de2fe0846a20f8b4e7*
- **Rewards**: *0x8e68c083c6f7784bf35a12d5a31f7587274d407c*
- **Store**: *0xb662559bcf3450d113819975e911de822fa6eccc*

The Cryptofiat (develop-b) contracts are deployed at the following addresses:
- **CryptoDollar**: *0x6b97d162ec1b44c24bf63e39956ddfae85b08799*
- **CryptoFiatHub**: *0x8d0a722b76c0dcb91bf62334afd11f925c0adb95*
- **Rewards**: *0x9836f8141f96fca273a0c4bf70af99cb9da58796*
- **Store**: *0xebfded149b86d4088c40a8b61d0388c584a446c8*

On the DEX (Decentralized Exchange Contract) branch, the contracts are deployed at the following addresses:
- **Exchange.sol**: *0x88facf1096d13a05f30ffe34bedf8477a8582ffd*
- **Token1.sol** (Mock Token): *0x0b446a9d7d5bbbb1c2b415a40065eb7de56fc4af*
- **Token2.sol** (Mock Token): *0xf2c0deadbb80439c20a6ed374b2d644081bdb32f*

## Accounts

  Addresses:

  - 0: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47' (coinbase)
  - 1: '0xcf7389dc6c63637598402907d5431160ec8972a5'
  - 2: '0x7a9f3cd060ab180f36c17fe6bdf9974f577d77aa'
  - 3: '0x14d281013d8ee8ccfa0eca87524e5b3cfa6152ba'
  - 4: '0x6e9a406696617ec5105f9382d33ba3360fcfabcc'
  - 5: '0x7e0f08462bf391ee4154a88994f8ce2aad7ab144'
  - 6: '0x4dc5790733b997f3db7fc49118ab013182d6ba9b'
  - 7: '0x545aeb22f378ef7a4f627c45efe8245152bed8a1'
  - 8: '0x830212529506afd9c24adcfdde6fe825982d37ae'
  - 9: '0x44809695706c252435531029b1e9d7d0355d475f'

  Private Keys:

  - 0: '7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712660'
  - 1: '7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712661'
  - 2: '7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712662'
  - 3: '7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712663'
  - 4: '7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712664'
  - 5: '7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712665'
  - 6: '7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712666'
  - 7: '7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712667'
  - 8: '7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712668'
  - 9: '7c78c6e2f65d0d84c44ac0f7b53d6e4dd7a82c35f51b251d387c2a69df712669'

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




