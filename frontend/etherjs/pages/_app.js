import React from "react";
import { configureChains, createClient, WagmiConfig, goerli } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains(
  [goerli],
  [alchemyProvider({ apiKey: "kWaRU0Ob51cgzo0jkLJK3QAeilm4Pu14" })]
);

//optionally you can do this (pt.1) 
// const { chains, provider } = configureChains(
//   [mainnet, optimism],
//   [
      //  alchemyProvider({ apiKey: 'yourAlchemyApiKey' }),
      //  publicProvider(),
      // for multiple providers
      //  infuraProvider({ apiKey: 'yourInfuraApiKey' })
      // ],
// )

const client = createClient({
  autoConnect: true,
  provider,
  //The default strategy to persist and cache data.
  //storage: createStorage({ storage: window.localStorage }),

  //if done the pt.1 do this,
  // connectors: [new InjectedConnector({ chains })],
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp;
