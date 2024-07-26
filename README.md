# Pruvswap

## Project Overview
Pruvswap is a Multi-Chain Liquidity Aggregator designed to enhance cross-chain liquidity provision, swap efficiency, and integration tooling. Leveraging SwapKit, Chainflip SDK, and Thunderhead architecture, Pruvswap aims to provide a seamless and efficient multi-chain swapping experience for users and developers alike.

## Live Link
[https://jonesbridge.vercel.app/](https://jonesbridge.vercel.app/)

## Usage of SwapKit SDK
In the file `ThorSwapComponent.js`, the SwapKit SDK is used as follows:

```javascript
import React, { useState, useEffect } from 'react';
import { Chain, createSwapKit, WalletOption } from '@swapkit/sdk';

// Additional component code here
```

## Key Features
1. **Multi-Chain Swapping**
   - Integrates SwapKit to enable seamless cross-chain swaps.
   - Supports a wide range of tokens across multiple chains (ETH, AVAX, BSC, etc.).

2. **Liquidity Aggregation**
   - Aggregates liquidity from multiple sources to provide the best swap rates.
   - Utilizes Chainflip SDK to facilitate efficient cross-chain liquidity movements.

3. **Improved Quotes and Gas Pricing**
   - Implements features from SwapKit for optimized quotes and gas pricing.
   - Provides users with real-time, accurate pricing information.

4. **User Interface**
   - Develops an intuitive frontend that allows users to perform cross-chain swaps effortlessly.
   - Displays swap routes, rates, and transaction details clearly.

5. **Integration Tooling**
   - Creates APIs and SDKs that other developers can use to integrate multi-chain swapping into their own dApps.
   - Leverages Thunderhead architecture for staking solutions and enhanced protocol capabilities.

## Technical Stack
- **Frontend**: React.js, Next.js
- **Backend**: Node.js, Express.js
- **Blockchain Integration**: SwapKit SDK, Chainflip SDK, THORChain, Maya Protocol
- **Database**: MongoDB, Redis
- **Deployment**: Docker, Kubernetes, AWS/GCP

## Development Steps
1. **Setup Development Environment**
   - Install necessary SDKs (SwapKit, Chainflip).
   - Set up a basic project structure with React.js and Node.js.

2. **Integrate SwapKit**
   - Implement SwapKit SDK to handle cross-chain swaps.
   - Test swapping functionality with various tokens and chains.

3. **Liquidity Aggregation**
   - Develop backend logic to aggregate liquidity from multiple sources.
   - Use Chainflip SDK for efficient liquidity movements.

4. **Frontend Development**
   - Build a user-friendly interface for performing swaps.
   - Display real-time quotes, gas pricing, and swap routes.

5. **Integration Tooling**
   - Create APIs and SDKs for third-party integration.
   - Document the integration process for other developers.

6. **Testing and Deployment**
   - Conduct thorough testing to ensure functionality and security.
   - Deploy the application on a cloud platform (AWS/GCP).



This integration allows Pruvswap to utilize the SwapKit SDK's features for multi-chain capabilities, improved quotes, gas pricing, and DEX aggregation.

## Architecture
Pruvswap leverages the following architectural components:
- **SwapKit SDK**: Simplifies THORChain integration, enabling multi-chain capabilities with improved quotes, gas pricing, and DEX aggregation.
- **Chainflip SDK**: Facilitates efficient cross-chain liquidity movements and swapping mechanisms.
- **Thunderhead Architecture**: Enhances protocol capabilities, particularly in staking solutions and protocol integration.

## Challenges and Solutions
- **Integration of Multiple SDKs and APIs**: Ensured seamless integration by thorough documentation and testing.
- **Cross-Chain Transaction Complexities**: Implemented robust error handling and security measures.
- **Optimizing Liquidity Aggregation**: Developed efficient algorithms to aggregate liquidity for the best rates.

## Conclusion
Pruvswap exemplifies the potential of combining SwapKit, Chainflip SDK, and Thunderhead architecture to create a powerful and user-friendly multi-chain liquidity aggregator. By improving cross-chain swapping, liquidity provision, and integration tooling, Pruvswap enhances the overall functionality and efficiency of decentralized finance ecosystems.






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
