const _generalUtils = require('../utils/generalUtils')
const digits = '0123456789'
const alphabets = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = alphabets.toUpperCase()
const specialChars = "\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
const defaultOptions = {
  digits: true,
  alphabets: true,
  uppercase: true,
  specialChars: true
}

class RandomStringGenerator {
  /**
   * @function
   * @name generate
   * @param {Number} length - How many characters should be in string
   * @param {Object} options - Options to generate random string
   * @returns {String} - random string
   */
  generate (length, options) {
    length = length || 10
    options = { ...defaultOptions, ...options || {} }
    const allowsChars =
      ((options.digits || '') && digits) +
      ((options.alphabets || '') && alphabets) +
      ((options.uppercase || '') && uppercase) +
      ((options.specialChars || '') && specialChars)
    let randomString = ''
    for (let index = 0; index < length; ++index) {
      const charIndex = _generalUtils.rand(1, allowsChars.length)
      randomString += allowsChars[charIndex]
    }
    return randomString
  }
}

module.exports = new RandomStringGenerator()
