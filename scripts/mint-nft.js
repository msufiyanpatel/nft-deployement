require("dotenv").config();
const API_URL = "https://eth-goerli.g.alchemy.com/v2/-exOdzmL9ceMrfOoFGmjRy_OwQa7u5rx";

const PUBLIC_KEY = "0x0Bb3fbC652F2d1370824BfE079571Da31F94426B";
const PRIVATE_KEY = "0x8c34592384c67a3c461ebe1a69f8d2bd348172447cb8c73feb2d7f2ed7540132";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

//console.log(JSON.stringify(contract.abi));

const contractAddress = "0x11b9967f47252DF1Fd301B9109e8ffA4CA21abC5";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI){
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY,"latest");

    const tx={
        from: PUBLIC_KEY,
        to : contractAddress,
        nonce : nonce,
        gas : 500000,
        data : nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
    };

    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });
}
mintNFT(
    "https://gateway.pinata.cloud/ipfs/QmZdadqPPZTu3qEfLV9NLeX5tLFkfeyDCP554xFji6ugvy"
);
