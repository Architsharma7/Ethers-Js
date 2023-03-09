import {ethers} from "ethers";
import React, { useEffect } from 'react'

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/4819e5c5c1ca4ff58cb6c0eb1733df99`);
const daiWithSigner = contract.connect(signer);

const daiAddress = "dai.tokens.ethers.eth";

const daiAbi = [
    // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",
  
    // Get the account balance
    "function balanceOf(address) view returns (uint)",
  
    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",
  
    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);

const dai = ethers.utils.parseUnits("1.0", 18);

// Send 1 DAI to "ricmoo.firefly.eth"
tx = daiWithSigner.transfer("ricmoo.firefly.eth", dai);

// Receive an event when ANY transfer occurs
daiContract.on("Transfer", (from, to, amount, event) => {
    console.log(`${ from } sent ${ formatEther(amount) } to ${ to}`);
    // The event object contains the verbatim log data, the
    // EventFragment and functions to fetch the block,
    // transaction and receipt and event functions
});

// A filter for when a specific address receives tokens
myAddress = "0x8ba1f109551bD432803012645Ac136ddd64DBA72";
filter = daiContract.filters.Transfer(null, myAddress)

// Receive an event when that filter occurs
daiContract.on(filter, (from, to, amount, event) => {
    // The to will always be "address"
    console.log(`I got ${ formatEther(amount) } from ${ from }.`);
});

// Get the address of the Signer
myAddress = await signer.getAddress()