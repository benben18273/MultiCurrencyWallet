import config from 'app-config'

export default {
  erc20: {
    platform: 'ethereum',
    standard: 'erc20',
    currency: 'eth',
    explorerApi: config.api.etherscan,
    explorerApiKey: config.api.etherscan_ApiKey,
  },
  bep20: {
    platform: 'binance chain', // ? 'Smart' does not matter ?
    standard: 'bep20',
    currency: 'bnb',
    explorerApi: config.api.bscscan,
    explorerApiKey: config.api.bscscan_ApiKey,
  },
}