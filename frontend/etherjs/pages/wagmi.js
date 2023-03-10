import React from 'react'
import { useAccount, useConnect} from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const Wagmi = () => {

    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
      })

  return (
    <div>
        {
            isConnected ? (
                <p>wallet connected : {address}</p>
            ) : 
            (
                <button onClick={connect}>Connect Wallet</button>
            )
        }
    </div>
  )
}

export default Wagmi;