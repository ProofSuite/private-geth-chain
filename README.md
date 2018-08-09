
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
- **Exchange**: *0xfc074fd5702e6becb78d64acd4126a0079f42d85*
- **Migrations**: *0x19137989fcb9ffba153f67ab3f357c153ac2f54a*
- **Token1**: *0xcd2d884b15e8ec9fc69f50a20a9a2ed0d5a94dc6*
- **Token2**: *0xaef30fe48e41de66a61cef3262d1b1db07473fda*
- **Token3**: *0xe161cf5c796d60df49fec97d63efcf57d9312d41*
- **Token4**: *0x74a5fda7e64046de22d7ddab4a690f1f48f31c2a*
- **Token5**: *0x476f593d0d3c1ac64dea18205ebae2f20ff84ea1*
- **Token6**: *0xc8bc0bed72333132991d754b8d6ca0f7423bef1c*
- **Token7**: *0x440f017dad9ed2981f37ef9735b4f85ddf32ae15*
- **Token8**: *0xa7ffa554657370a9a7b8e7934c9b3b9dabd2f468*
- **Token9**: *0xa3e64dd925e07695e7928557b16ef0141bf33e97*
- **Token10**: *0x0bcd171f3f606c58870f830c8b367df41d7c4029*
- **Token11**: *0x9130b304d05b35ce4a4d8f43bdd0d2602147a8e3*
- **Token12**: *0xa0cbbdc6747030a8803691c2b7b80dcd418de32a*
- **Token13**: *0xc5860f4ab7325907b9822a30ef616d711d459b62*
- **Token14**: *0x2bb1ed0936f7321e8a3b9e81d68fee76672a0f43*
- **Token15**: *0x59c1a51e7226ea1328ff23da4284dd121bad3751*
- **Token16**: *0xdd032748bccc205d23ded1efd43d3ab115f6c329*
- **Token17**: *0x0baf0b8cc2cb2fa20c2533a2620cb3bb5989efbe*
- **Token18**: *0x1014d571ccb476876326f75183ca3f34c7ca9daf*
- **Token19**: *0x46d6c4686646ef793bee36618780f8259d693297*
- **Token20**: *0x8daa913db90bd1c2804b4eb6d8f070de0d861bb5*
- **WETH**: *0x276e16ada4b107332afd776691a7fbbaede168ef*

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
./create.sh
```

Start a node on the private blockchain

```
./start.sh
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

## NetworkID

The networkID of this private network is 8888

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




