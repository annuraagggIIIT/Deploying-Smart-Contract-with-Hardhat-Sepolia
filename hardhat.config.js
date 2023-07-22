require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "HJrb6g6FY0gaNNiRlWqtJWmNk7TvZr5l";
const SEPOLIA_PRIVATE_KEY = "de9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  etherscan: {
    apiKey: "KJPC3XZH2B1167SEHN9KGMRHK6DTG6DJBU",
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
