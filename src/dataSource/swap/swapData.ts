module.exports ={
  'mainnet': {
    // BNB SmartChain Network
    'swap default - from BNB to CAKE': {networkName: "BNB Smart Chain", swapIn: '100', swapOut: '', fromToken: '', toToken: ''},
    //'swap from CAKE value to BNB ': {networkName: "BNB Smart Chain", swapIn: '0.001', swapOut: '', fromToken: 'CAKE', toToken: 'BNB'},
    //'swap default - from BNB to CAKE - enter output value': {networkName:"BNB Smart Chain", swapIn: '', swapOut: '0.001', fromToken: '', toToken: ''},
    //'swap from BNB to BUSD': {networkName: "BNB Smart Chain", swapIn: '', swapOut: '0.0051', fromToken: '', toToken: 'BUSD'},
    //'swap from BUSD to CAKE': {networkName: "BNB Smart Chain", swapIn: '', swapOut: '0.0001', fromToken: 'BUSD', toToken: 'CAKE'},
    // Ethereum
    'swap default - from ETH to USDC': {networkName: "Ethereum", swapIn: '0.0001', swapOut: '', fromToken: 'ETH', toToken: 'USDC'},
    'swap from USDC value to ETH ': {networkName: "Ethereum", swapIn: '0.0001', swapOut: '', fromToken: 'ETH', toToken: 'USDC'},
    'swap default - from ETH to USDC - enter output value': {networkName: "Ethereum", swapIn: '', swapOut: '0.00001', fromToken: 'ETH', toToken: 'USDC'},
    'swap from ETH to USDT': {networkName: "Ethereum", swapIn: '', swapOut: '0.0051', fromToken: 'ETH', toToken: 'USDC'},
    'swap from USDT to ETH': {networkName: "Ethereum", swapIn: '', swapOut: '0.00001', fromToken: 'ETH', toToken: 'USDC'}
  
  },
  'testnet': {
    'swap default - from BNB to CAKE': {networkName: "BNB Smart Chain", swapIn: '0.00001', swapOut: '', fromToken: '', toToken: ''},
    'swap from CAKE value to BNB ': {networkName: "BNB Smart Chain", swapIn: '0.001', swapOut: '', fromToken: 'CAKE', toToken: 'BNB'},
    'swap default - from BNB to CAKE - enter output value': {networkName:"BNB Smart Chain", swapIn: '', swapOut: '0.001', fromToken: '', toToken: ''},
    'swap from BNB to BUSD': {networkName: "BNB Smart Chain", swapIn: '', swapOut: '0.0051', fromToken: '', toToken: 'BUSD'},
    'swap from BUSD to CAKE': {networkName: "BNB Smart Chain", swapIn: '', swapOut: '0.0001', fromToken: 'BUSD', toToken: 'CAKE'},
    // Ethereum
    'swap default - from ETH to USDC': {networkName: "Ethereum", swapIn: '0.0001', swapOut: '', fromToken: 'ETH', toToken: 'USDC'},
    'swap from USDC value to ETH ': {networkName: "Ethereum", swapIn: '0.0001', swapOut: '', fromToken: 'ETH', toToken: 'USDC'},
    'swap default - from ETH to USDC - enter output value': {networkName: "Ethereum", swapIn: '', swapOut: '0.00001', fromToken: 'ETH', toToken: 'USDC'},
    'swap from ETH to USDT': {networkName: "Ethereum", swapIn: '', swapOut: '0.0051', fromToken: 'ETH', toToken: 'USDC'},
    'swap from USDT to ETH': {networkName: "Ethereum", swapIn: '', swapOut: '0.00001', fromToken: 'ETH', toToken: 'USDC'},
    // BNB SmartChain testnet
    'swap default - from tBNB to CAKE': {networkName: "BNB Smart Chain Testnet", swapIn: '0.001', swapOut: '', fromToken: '', toToken: ''},
    'swap from CAKE value to tBNB ': {networkName: "BNB Smart Chain Testnet", swapIn: '0.1', swapOut: '', fromToken: 'CAKE', toToken: 'tBNB'},
    'swap default - from tBNB to CAKE - enter output value': {networkName: "BNB Smart Chain Testnet", swapIn: '', swapOut: '0.01', fromToken: '', toToken: ''},
    'swap from tBNB to BUSD': {networkName: "BNB Smart Chain Testnet", swapIn: '', swapOut: '0.0051', fromToken: '', toToken: 'BUSD'},
    'swap from tBUSD to CAKE': {networkName: "BNB Smart Chain Testnet", swapIn: '', swapOut: '0.001', fromToken: 'BUSD', toToken: 'CAKE'},
    // Rinkeby
    'swap default - from RIN to tUSDC': {networkName: "Rinkeby", swapIn: '0.001', swapOut: '', fromToken: 'RIN', toToken: 'tUSDC'},

    'swap default - from RIN to tUSDC - enter output value': {networkName: "Rinkeby", swapIn: '', swapOut: '0.00001', fromToken: 'RIN', toToken: 'tUSDC'},
    'swap from RIN to tUSDC': {networkName: "Rinkeby", swapIn: '', swapOut: '0.0051', fromToken: 'RIN', toToken: 'tUSDC'},
    'swap from tUSDC to RIN': {networkName: "Rinkeby", swapIn: '', swapOut: '0.001', fromToken: 'RIN', toToken: 'tUSDC'}  
    
    //'switch to Goerli': {networkName: "Goerli", swapIn: '0.001', swapOut: '', fromToken: 'GOR', toToken: 'tUSDC'},

    }  
}
