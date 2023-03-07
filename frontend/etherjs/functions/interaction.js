//0xa3ded6cd9dd124eaf112f9046abfb127babde54673c9a437f4e4f0ceb7bdec96
//0x70d189a805f51a517b9a22b0279fdafc35ad1480
import {ethers} from "ethers";
import React, { useEffect } from 'react'

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/4819e5c5c1ca4ff58cb6c0eb1733df99`);

const walletAddress = "0x70d189a805f51a517b9a22b0279fdafc35ad1480";

const walletABI = [
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const Interaction = () => {

    const contractInteraction = async() => {
        const contract = new ethers.Contract(walletAddress,walletABI,provider);

        const contractName = await contract.name();
        console.log(contractName);

        const num = await contract.getValue();
        console.log(num);

        const balance = await contract.contractBalance();
        console.log(balance);

        const userbalance = await contract.accountBalance(`0x9B855D0Edb3111891a6A0059273904232c74815D`);
        console.log(userbalance);
    }

  return (
    <div>
        <button onClick={contractInteraction}>Interact</button>
    </div>
  )
}

export default Interaction;