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
## Consider TypeScript for your linting requirements.
+ Install the vscode-tslint extension if you are using the vs code editor.
+ npm install -g tslint 

```
# trouble shooting
```
  $ npm install         # complaining it mocha-co needs mocha@^1.18
  $ npm uninstall -g mocha
  $ npm i mocha@^1.18 -g
  $ npm i mocha-co
  $ mocha --harmony
  $ mocha --version     # still no joy ???
  $ npm i should
  $ npm i co-fs         
  # the problem with mocha-co was a red herring (misleading) as the only problem was user-data.js was in the wrong location.
```