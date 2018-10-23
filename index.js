'use strict'

const Duplex = require('stream').Duplex

/**
 * Utils and helpers functions
 * 
 * @todo npm publish
 */
module.exports = {
  /**
   *
   * @param {Duplex} stream
   * @returns {Promise<Buffer>}
   */
  streamToBuffer(stream) {
    return new Promise((resolve, reject) => {
      const buffers = []
      stream.on('error', reject)
      stream.on('data', data => buffers.push(data))
      stream.on('end', () => resolve(Buffer.concat(buffers)))
    })
  },

  /**
   *
   * @param {Buffer} buffer
   * @returns {Duplex}
   */
  bufferToStream(buffer) {
    const stream = new Duplex()
    stream.push(buffer)
    stream.push(null)
    return stream
  },
}