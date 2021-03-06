// Generated by CoffeeScript 1.6.3
require('./json_compare2')

(function() {
  var Greeter;

  Greeter = (function() {
    function Greeter(lang) {
      this.lang = lang;
      if (this.lang == null) {
        this.lang = 'en';
      }
    }

    Greeter.prototype.sayHello = function(name) {
      switch (this.lang) {
        case 'jp':
          return "" + (name != null ? "" + name + "\u3055\u3093\u3001" : "") + "\u3053\u3093\u306B\u3061\u306F\u3002";
        case 'zh':
          return "" + (name != null ? "" + name + "\uFF0C" : "") + "\u4F60\u597D\uFF01\u5403\u4E86\u6CA1\uFF1F";
        default:
          return "Hello" + (name != null ? ", " + name : "") + "!";
      }
    };

    return Greeter;

  })();

  exports.Greeter = Greeter;

}).call(this);
