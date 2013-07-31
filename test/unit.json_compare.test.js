var should = require('should')

    , modoules = require('../load')('models');

console.log(modoules)
console.log(modoules.JSONCompare)

/*
describe('json对象比较', function () {
    beforeEach(function () {
        console.log("before compare...");
    });

    afterEach(function () {
        console.log("after compare...");
    });

    it('json对象中完全一样', function () {
        var record = "{\"data\":[{\"f30\":60974462,\"f31\":\"途顺汽车用品专营店\",\"f32\":12,\"f33\":2}],\"msg\":null,\"expire\":300}";
        var record2 = "{\"data\":[{\"f30\":60974462,\"f31\":\"途顺汽车用品专营店\",\"f32\":12,\"f33\":2}],\"msg\":null,\"expire\":300}";
        var compare = new JSONCompare();
        compare.deepCompare(JSON.parse(record), JSON.parse(record2)).should.equal(true);
    });

    it('json 对象中如果数字属性的值不一致的话,Json对象应该不相等', function () {
        var record = "{\"data\":[{\"f30\":60974462,\"f31\":\"途顺汽车用品专营店\",\"f32\":11,\"f33\":2}],\"msg\":null,\"expire\":300}";
        var record2 = "{\"data\":[{\"f30\":60974462,\"f31\":\"途顺汽车用品专营店\",\"f32\":12,\"f33\":3}],\"msg\":null,\"expire\":300}";
        var compare = new JSONCompare();
        compare.deepCompare(JSON.parse(record), JSON.parse(record2)).should.equal(false);
    });
});
*/
