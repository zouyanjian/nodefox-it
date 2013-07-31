(function() {
    module.exports = function(path) {
        var e;
        try {
            return require("./lib-cov/" + path);
        } catch (_error) {
            e = _error;
            return require("./lib/" + path);
        }
    };

}).call(this);