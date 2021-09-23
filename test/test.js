var assert = require('assert');
var testFunc = require('../index');

const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
};

describe('MyTest', function () {
    it('should be { c: \'d\' }', function () {
        assert.equal(JSON.stringify(testFunc(obj, 'a.b')), JSON.stringify({ c: 'd' }));
    });

    it('should be \'d\'', function () {
        assert.equal(testFunc(obj, 'a.b.c'), 'd');
    });

    it('should be \'f\'', function () {
        assert.equal(testFunc(obj, 'a.e'), 'f');
    });

    it('should be undefined', function () {
        assert.equal(testFunc(obj, 'x.x.e'), undefined);
    });
    
    it('should be true', function () {
        assert.equal(testFunc(obj, 'x.x.e', true), true);
    });
    
    it('should be My default value', function () {
        assert.equal(testFunc(obj, 'x.x.e', 'My default value'), 'My default value');
    });

    it('should be { c: \'d\' } even with the default value', function () {
        assert.equal(JSON.stringify(testFunc(obj, 'a.b', 'default value')), JSON.stringify({ c: 'd' }));
    });
});
