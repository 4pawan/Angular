"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter = (function () {
    function Greeter(to) {
        this.to = to;
    }
    Greeter.prototype.greet = function () {
        return 'Hi ${this.to}!';
    };
    return Greeter;
}());
exports.Greeter = Greeter;
//# sourceMappingURL=greeter.js.map