const chai = require('chai')
const should = chai.should()
const randomUtils = require('../index')

describe('Random string', () => {
  it('Should return 10 character random string', (done) => {
    const string = randomUtils.randomStringGenerator()
    should.equal(string.length, 10)
    done()
  })

  it('Should not include digits', (done) => {
    const string = randomUtils.randomStringGenerator(undefined, { digits: false })
    should.equal(/\d+/.test(string), false)
    done()
  })

  it('Should include upper case characters', (done) => {
    const string = randomUtils.randomStringGenerator(undefined, { uppercase: true })
    should.equal(/[A-Z]+/.test(string), true)
    done()
  })

  it('Should not include uppercase letters', (done) => {
    const string = randomUtils.randomStringGenerator(undefined, { uppercase: false })
    should.equal(/[A-Z]+/.test(string), false)
    done()
  })
})
