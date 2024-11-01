export const swapConfig = {
    executeSwap: false,
    useVersionedTransaction: true,
    tokenAAmount: 0.15, // Amount of WSOL to swap
    TokenA: 'So11111111111111111111111111111111111111112', // WSOL address
    TokenB: 'HyJcz1VmtnvDq7XTXNqwXBdKjYe2ri8NM8x2eKpSpump', // DAWG address
    maxLamports: 1500000,
    direction: 'in' as 'in' | 'out', // Direction of swap
    liquidityFile: 'https://api.raydium.io/v2/sdk/liquidity/mainnet.json',
    maxRetries: 20,
  };