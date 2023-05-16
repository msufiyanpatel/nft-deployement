/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/-bU_325kB3kLmbuB_uUIQJf9gY44P1UC",
      accounts: [`0x8c34592384c67a3c461ebe1a69f8d2bd348172447cb8c73feb2d7f2ed7540132`],
    },
  },
};
