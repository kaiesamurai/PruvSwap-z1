import React, { useEffect} from 'react';
import './App.css';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import WormholeBridge from '@wormhole-foundation/wormhole-connect';
import { Widget, WidgetConfig } from "@rango-dev/widget-embedded";

import HeaderWithTextAndImage from './components/HeaderWithTextAndImage';
import DextoolsWidget from './components/DextoolsWidget'; // Adjust the path according to your file structure

import telegramLogo from './Telegram_logo.svg';
import twitterLogo from './X_logo.svg';

//import ThorSwapComponent from './components/ThorSwapComponent';

function App() {

    // sample widget config
    const config = {

        // your dapp api key in Rango
        // this API key is only for test purpose. Don't use it in production.
        apiKey: 'b138e599-5b43-475a-8e37-ff35b27a51b9',

        // your project wallet connect project id
        // Get your Wallet Connect project id from https://cloud.walletconnect.com/
        walletConnectProjectId: 'e24844c5deb5193c1c14840a7af6a40b',

        // override the widget title
        title: "Cross-chain Swaps",

        // affiliate configs
       /* affiliate: {
            // check widget monetization guide
            key: "your affiliate key",
            percent: 1
        },*/

        // the default amount for the swap input
        amount: 1,

        // configuration related to the source blockchain/token input
        from: {
            // limiting blockchains to some specific ones
            // the default blockchain for the source input
            blockchain: 'ETH',
            // the default token for the source input
            token: {
                blockchain: 'ETH',
                address: null,
                symbol: 'ETH'
            }
        },
        // same as above but for the destination blockchain and token
        to: {
            blockchain: 'SOLANA',
            token: {
                blockchain: 'SOLANA',
                address: null,
                symbol: 'SOL'
            }
        },

        // all theme configuration goes here
        theme: {
            // the default theme for the widget
            mode: 'light',
            // overriding the theme colors for dark/light modes
            colors: {
                dark: {
                    neutral: '#434965',
                    primary: '#1C3CF1',
                    secondary: '#2284ED',
                    background: '#070917',
                    foreground: '#FDFDFD',
                    info: '#5BABFF'
                },
                light: {
                    primary: '#1C3CF1',
                    secondary: '#469BF5',
                    neutral: '#e6e6e5',
                    background: '#FDFDFD',
                    foreground: '#010101',
                    info: '#5BABFF'
                }
            },
            // widget box border radius
            borderRadius: 1,
            // widget buttons border radius
            secondaryBorderRadius: 2,
            // passing true for singleTheme will limit the theme only to
            // dark or light based on value passed in 'mode'
            singleTheme: false
        }

    }

  useEffect(() => {
    const loadJupiterScript = () => {
      const script = document.createElement('script');
      script.src = 'https://terminal.jup.ag/main-v2.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.Jupiter.init({
          displayMode: "widget",
          endpoint: "https://hardworking-fragrant-replica.solana-mainnet.quiknode.pro/5f783f9053aa7cf67cae238855896c9f0ca26f76/",
          strictTokenList: false,
          containerStyles: {
              backgroundColor: '#D2B48C', // Keeps the container background invisible

          },
          formProps: {
            initialInputMint: "So11111111111111111111111111111111111111112",
            initialOutputMint: "GCVS6j6Y4JTF1x58dVWwDduzP94SMKCkhMQkQdMf1E4X",
          },
        });
      };
    };

    if (!document.querySelector('script[src="https://terminal.jup.ag/main-v2.js"]')) {
      loadJupiterScript();
    }

  }, []);

  return (
      <div className="App">
          <body>
          <HeaderWithTextAndImage />
          <div className="social-links">
              <a href="https://twitter.com/INFOWARSmemeSol" target="_blank" rel="noopener noreferrer">
                  <img src={twitterLogo} alt="Twitter" style={{ width: '30px', marginRight: '20px' }} />
              </a>
              <a href="https://t.me/infowarsonsol" target="_blank" rel="noopener noreferrer">
                  <img src={telegramLogo} alt="Telegram" style={{ width: '30px', position: 'relative', top: '2px' }} />
              </a>
          </div>
          <div className="widgets-container">
              <DextoolsWidget/>
          </div>
          <div className="rango-widget-background">
              <div className="rango-widget-wrapper">
                  <Widget config={config}/>
              </div>
          </div>
          </body>
          <p className="custom-textLabel">This site and meme coin are parody and satire and not associated with INFOWARS or Alex Jones. This token is simply a meme coin with no intrinsic value or expectation of financial return.</p>
      </div>

  );
}

export default App;
