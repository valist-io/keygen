const ethers = require('ethers');

const privateKey = "0x" + require('crypto').randomBytes(32).toString('hex');
const wallet = new ethers.Wallet(privateKey);
console.log("PRIVATE KEY (DO NOT SHARE):", privateKey);
console.log("PUBLIC ADDRESS:", wallet.address);