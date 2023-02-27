# Smart Contract Winner

Week 4 Alchemy University exercise involving the creation and deployment of contracts in hardhat.

# Instructions
# Ready to be a winner?
You'll need to prove your smart contract skills to us. Don't worry, you totally got this!

Your Goal: Emit the Winner event Your goal is simple! Emit the winner event on this smart contract on the Goerli testnet: https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code

If you take a look at the Code tab in Etherscan, you'll see that the source code for this contract looks like this:

// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}
How do we possibly make it so the tx.origin (the EOA who originated the transaction) is not equal to the msg.sender?

# Creating the project
Create a Node project:

npm init -y
Install dependencies:

npm install --save-dev hardhat
npm install dotenv
Create a Hardhat javascript project by running npx hardhat and selecting javascript option 

npx hardhat
> Create a javascript hardhat.config.js
Create contract, test and .env files

touch .env

run npm i --save-dev @nomicfoundation/hardhat-toolbox

# To use this repository
clone https://github.com/Ogabbyell/smart-contract-winner.git
run npm install
add your environment variables 
run npx hardhat run scripts/deploy.js to deploy the smart contract and obtain the contract address and Abi
run npx hardhat run scripts/emitWinnerEvent.js to emit winner event