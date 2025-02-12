/**
 * Ack.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2017 - 2018 Desionlab
 * @license   MIT
 * 
 * Library for working with "CashCode" Bill Validator devices from Node.js app.
 */

const CCNet = require('./../Constants');
const Command = require('./../Command');

/**
 * Class Ack
 * 
 * Command to confirm a response correctly received.
 * 
 * @description CCNet Document 1
 * @version 1.0.0
 */
class Ack extends Command {

  /**
   * Ack constructor
   * 
   * @param {Object} device 
   */
  constructor (device) {
    super(0x00, device);
  }

  /**
   * Preparing command to send.
   */
  request () {
    var cmd = Buffer.from([
      CCNet.SYNC,
      this.device.adr,
      0x06,
      this.cmd
    ]);
    return Buffer.concat([
      cmd,
      this.device.getCRC16(cmd)
    ]);
  }

}

module.exports = Ack;

/* End of file Ack.js */