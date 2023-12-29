async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // const myContract = await ethers.getContractFactory("Calculator");
    // const contract = await myContract.deploy();

    // console.log("Contract deployed at:", contract.address);

    // for contract example:
    
    const calc = await ethers.getContractFactory("calc");
    const contract = await calc.deploy();

    console.log("Contract deployed at:", contract.address);
    console.log("Finished");


    //   const saySomething = await contract.speak();

    //   console.log("saySomething value:", saySomething);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
