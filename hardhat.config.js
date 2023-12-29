require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const praivateKey = process.env.PK;
const api = process.env.API_URL;

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: api,
      accounts: [praivateKey],
    },
  },
};
