# Node - Repository devoted to NodeJS development.

## TDD tools:

+ Mocha [aka mochajs](https://mochajs.org/) is a feature-rich JavaScript test framework running on Node.js
+ Use [shouldjs](https://shouldjs.github.io/) to extend the ways we use the Assertion function 
```
npm i -g mocha
mkdir test
mocha           # runs all test *spec.js 
# used to be that you needed to provide the harmony flag when using generator functions
mocha --harmony 
npm init    # generates a package.json file

npm i co-mocha --save # install version of mocha that understands generator functions.
```