class GeneralUtils {
  /**
 * @param  {Number} min
 * @param  {Number} max
 * @returns {Number}
 * @description Random number between provided min and max
 */
  rand (min, max) {
    var random = Math.random()
    return Math.floor(random * (max - min) + min)
  }
}
module.exports = new GeneralUtils()
