import React from "react";
import { configureChains, createClient, WagmiConfig, goerli, createStorage } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { chains, provider } = configureChains(
  [goerli],
  [alchemyProvider({ apiKey: "kWaRU0Ob51cgzo0jkLJK3QAeilm4Pu14" })]
);

const client = createClient({
  autoConnect: true,
  provider,
  //The default strategy to persist and cache data.
  //storage: createStorage({ storage: window.localStorage }),
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp;
