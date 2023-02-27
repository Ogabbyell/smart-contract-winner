const ethers = require('ethers');
require('dotenv').config();

async function main() {

  const url = process.env.TEST_API_URL;

  let artifacts = await hre.artifacts.readArtifact("Winner");

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.TEST_PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a Winner Factory
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let winner = await factory.deploy();

  console.log("Winner address:", winner.address);

  await winner.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});