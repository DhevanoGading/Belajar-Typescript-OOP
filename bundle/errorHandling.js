"use strict";
var errorHandling;
(function (errorHandling) {
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.message = message;
        }
    }
    function doubleIt(value) {
        if (value < 0) {
            throw new ValidationError("Value cannot be less than 0");
        }
        return value * 2;
    }
    try {
        const result = doubleIt(-1);
        console.log(result);
    }
    catch (error) {
        if (error instanceof ValidationError) {
            console.log(error.message);
        }
    }
})(errorHandling || (errorHandling = {}));
