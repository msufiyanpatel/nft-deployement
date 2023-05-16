// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
//const hre = require("hardhat");

async function main() {
  const myNFT = await ethers.getContractFactory("myNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const MyNFT = await myNFT.deploy();
  console.log("Contract deployed to address:", MyNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//0x11b9967f47252DF1Fd301B9109e8ffA4CA21abC5

