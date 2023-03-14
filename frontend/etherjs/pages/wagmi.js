import React from "react";
import { useAccount, useBlockNumber, useConnect, useContract } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { goerli } from "wagmi";
import { useBalance } from "wagmi";
import { useProvider } from 'wagmi'
import { useSendTransaction,  usePrepareSendTransaction  } from 'wagmi'


const Wagmi = () => {
  useAccount;
  const { address, isConnected } = useAccount();
  const connector = new InjectedConnector({
    chains: [goerli],
  });
  // useConnect
  const {connect} = useConnect({
    connector,
  });
  useBalance;
  const { data, isError, isLoading } = useBalance({
    address: `0x9B855D0Edb3111891a6A0059273904232c74815D`,
    chainId: 5,
  });
  // useBlockNumber
  const { block } = useBlockNumber();

  // useContract
  const contract = useContract({
    address: `0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e`,
    abi: ``,
    eventName: 'NewOwner',
    listener(node, label, owner) {
      console.log(node, label, owner)
    },
  })

  //useProvider
  const provider = useProvider({
    chainId: 1,
  })

  const { config } = usePrepareSendTransaction({
    request: { to: 'moxey.eth', value: BigNumber.from('10000000000000000') },
  })
  const { data1, isLoading1, isSuccess, sendTransaction } =
    useSendTransaction(config)

  return (
    <div>
      {isConnected ? (
        <p>
          wallet connected : {address} {data?.formatted} {block} 
        </p>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
      <button disabled={!sendTransaction} onClick={() => sendTransaction?.()}>
        Send Transaction
      </button>
    </div>
  );
};

export default Wagmi;
