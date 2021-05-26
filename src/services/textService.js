const convertText = require('../utils/convertText')
const checkPalindrome = require('../utils/palindrome')

const upsideDownText = text => {
  return { text: convertText(text), palindrome: checkPalindrome(text) }
}

module.exports = upsideDownText;
