// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");


async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    /*
        A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
        so ZeeCard here is a factory for instances of our ZeeCard contract.
        in other words -- ZeeCard Factory lets us create new instances of our ZeeCard contract in an abstracted way.
    */
    const Whitelist = await hre.ethers.getContractFactory("Whitelist");
    
    // here we deploy the contract
    // 10 is the Maximum number of whitelisted addresses allowed (Contract constructor params)
    const whitelist = await Whitelist.deploy(10);

    // Wait for it to finish deploying
    await whitelist.deployed();

    // print the address of the deployed contract
    console.log("Whitelist CONTRACT deployed to:", whitelist.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
