// Pseudocode:
//  User Creation Request -> Data Layer -> User List
//                        <- +1 user    <- +1 user
//
//  Test steps:
//      1. Get user count
//      2. Save new user
//      3. Get new user count
//
// Usage:
//  $ npm init                  # create package.json
//  $ npm i -g mocha            # install mocha globally
//  $ npm i co-mocha --save     # support generator functions
//  $ mocha                     # run all #spec.js files in the directory test   
//         

require('co-mocha');
var should = require('should');
var data = require('../user-data.js');

describe('user data', function() {

    it('should have +1 user count after saving', function*() {
        // 1. Get user count
        var users = yield data.users.get();

        // 2. Save new user
        yield data.users.save({ name: 'John' });

        // 3. Get new user count
        var newUsers = yield data.users.get();
        newUsers.length.should.equal(users.length + 1);
    });

});