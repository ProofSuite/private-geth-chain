
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

On the Cryptofiat-a branch, the contracts are deployed at the following addresses:

- **CryptoDollar**: *0x080ad9df9d0dc7e3d7335563e35c1ffd7b9cf8b4*
- **CryptoFiatHub**: *0xe697df331dc3dec15cca00196d68094e5f1dfb3e*
- **Rewards**: *0x132cd9073785489134b1bd1ff9d80d00c7795d3d*
- **Store**: *0xbf3a2acc78b6c339e9d4afc3466ec4abfd5f4bca*

On the DEX (Decentralized Exchange Contract) branch, the contracts are deployed at the following addresses:

- **Exchange.sol**: *0x895d0a5e62479a9324252972a7b458d4a1e4d43d*
- **Token1.sol** (Mock Token): *0xdc759dd0c3ee162c8f57f6df4cde618c44b8deae*
- **Token2.sol** (Mock Token): *0x8208c9435fffcc3c514a7ba73101ea87f85ae0ee*

On te dex-with-tokens-deposit branch, the contracts are deployed at the following addresses:

- **Exchange.sol**: *0x29faee20f205c15c6c3004482f8996a468336b67*
- **Token1.sol**: (Mock Token) *0x5d564669ab4cfd96b785d3d05e8c7d66a073daf0*
- **Token2.sol**: (Mock Token) *0x9792845456a0075df8a03123e7dac62bb0f69440*
- **Token3.sol**: (Mock Token) *0x27cb1d4b335ec45512088eea990238344d776714*

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




