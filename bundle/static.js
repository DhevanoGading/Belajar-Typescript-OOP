"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticMethod = void 0;
var staticMethod;
(function (staticMethod) {
    class Configuration {
    }
    Configuration.NAME = "Dhevano Gading";
    Configuration.GENDER = "Laki-laki";
    Configuration.AGE = 19;
    class MathUtil {
        static sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
    }
    staticMethod.MathUtil = MathUtil;
    // console.log(Configuration.NAME);
    // console.log(Configuration.GENDER);
    // console.log(Configuration.AGE);
    // console.log(MathUtil.sum(2, 4, 6, 8));
})(staticMethod || (exports.staticMethod = staticMethod = {}));
