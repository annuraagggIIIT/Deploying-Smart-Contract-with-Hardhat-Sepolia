const { ethers } = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 300; // 5 minutes from now

  const lockedAmount = ethers.utils.parseEther("0.001");

  const lock = await ethers.getContractFactory("Lock");
  const lockContract = await lock.deploy(unlockTime, { value: lockedAmount });

  await lockContract.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lockContract.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
