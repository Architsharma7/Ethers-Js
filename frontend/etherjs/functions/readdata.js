import {ethers} from "ethers";
import React from 'react'

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/4819e5c5c1ca4ff58cb6c0eb1733df99`);

const Readdata = () => {

    const getData = async( ) => {
    const block = await provider.getBlockNumber();
    console.log(block)
    const balance = await provider.getBalance("0x9B855D0Edb3111891a6A0059273904232c74815D")
    console.log(balance)
    const formattedbalance = ethers.utils.formatEther(balance);
    console.log(formattedbalance);
    };

  return (
    <div>
        <button onClick={getData}>get data</button>
    </div>
  )
}

export default Readdata;