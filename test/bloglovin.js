var lib_dir = process.env.JS_COV ? '../lib-cov/': '../lib/';

var Bloglovin = require(lib_dir + 'bloglovin').Bloglovin
  , assert = require('assert');

var bloglovin = new Bloglovin();

describe('Bloglovin', function () {

    describe('#followerCount', function () {

        it('should get the # of followers a blog has', function (done) {
            bloglovin.followerCount(3668940, function (err, followers) {
                assert.ifError(err);
                assert(typeof followers === 'number');
                assert(followers > 0);
                done();
            });
        });

        it('should get the # of followers a blog has using a bloglovin url', function (done) {
            bloglovin.followerCount('bloglovin.com/blog/3668940', function (err, followers) {
                assert.ifError(err);
                assert(typeof followers === 'number');
                assert(followers > 0);
                done();
            });
        });

        it('should fail on invalid blog url', function (done) {
            bloglovin.followerCount('adsfasdfasdof', function (err) {
                assert(err);
                done();
            });
        });

    });

});

