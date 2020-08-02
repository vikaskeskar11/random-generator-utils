# random-utils
> Generate random things
## Installation
```npm i random-utils```
## Random string generation
Example:
``` javascript
const options = {
    digits: true, // Include digits string
    alphabets: true, // Include alphabets in string
    uppercase: true, // All characters should be in upper case
    specialChars: true // Include special characters
}
const length = 5
randomStringGenerator(length, options) // Default length is 10
```