/* eslint-env mocha */
'use strict'

const script = require('bitfinex-api-node/examples/rest2/list_open_orders')
const orders = require('../../../lib/commands/orders')
const validateCommand = require('../../util/validate_command')

script.skipAutoExec()

describe('orders', () => {
  validateCommand(orders, script, [{
    label: 'passes market',
    scriptArgs: { filterByMarket: 'tBTCUSD' },
    handlerArgs: { market: 'tBTCUSD' }
  }])
})
