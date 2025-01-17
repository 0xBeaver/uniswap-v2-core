import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  solidity: {
    version: "0.8.1",
     settings: {
       outputSelection: {
        "*": {
          "*": [
            "evm.bytecode.object",
            "evm.deployedBytecode.object",
            "abi",
            "evm.bytecode.sourceMap",
            "evm.deployedBytecode.sourceMap",
            "metadata"
          ],
          "": ["ast"]
        }
      },
      evmVersion: "istanbul",
      optimizer: {
        enabled: true,
        runs: 999999
      }
    }
  },
  networks: {
    hardhat: {
      hardfork: 'istanbul',
      mnemonic: 'horn horn horn horn horn horn horn horn horn horn horn horn',
      gasLimit: 9999999,
      mining: {
        auto: true,
      },
      forking: {
        url: process.env.JSON_RPC_URL,
      },
    },
  },
};
