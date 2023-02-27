const ethers = require('ethers');
require('dotenv').config();


async function main() {
    const url = process.env.TEST_API_URL;

    // Creating the wallet
    const provider = new ethers.providers.JsonRpcProvider(url);

    let privateKey = process.env.TEST_PRIVATE_KEY;

    let wallet = new ethers.Wallet(privateKey, provider);

    // copy the winner Abi from C:\Users\NHISFCT-ICT\OneDrive\Documents\PERSONAL FOLDER\Blockchain Development\Apps\emit-winner-event\artifacts\contracts\Winner.sol\Winner.json
    // after running npx hardhat run scripts/deploy.js 
  
    const winnerAbi = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "contractAddress",
              "type": "address"
            }
          ],
          "name": "emitWinner",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];
  
    // Create the contract 
    // the winner contract address is gotten from console after the contract is deployed is deployed
    const winnerAddress = "0xF2d9D442C60dEcda7c4540ed822776cD2d071C3B"; 
    const winnerContract = new ethers.Contract(winnerAddress, winnerAbi, wallet);
  
    const contractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

    // setup communication between the two contracts
    const res = await winnerContract.emitWinner(contractAddress)// // const tx = await winnerContract.functions.winAttempt(contractContractAddress);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
  });




//   Tx Hash = 0xfb5e8c0c3d80f0ac9eaab8301f592af48233a2ecfd097af0a7839825bac04d47 on etherscan