// Pseudocode:
//  User Creation Request -> Data Layer -> User List
//                        <- +1 user    <- +1 user
//
//  Test steps:
//      1. Get user count
//      2. Save new user
//      3. Get new user count
//

require('co-mocha');

describe('user data', function() {

    it('should have +1 user count after saving', function*() {
        // 1. Get user count
        var users = yield data.users.get();

        // 2. Save new user
        yield data.users.save({ name: 'John' });

        // 3. Get new user count
        var newUsers = yield data.users.get();
        newUsers.length.should.equal(users.length + 1);
    })

});