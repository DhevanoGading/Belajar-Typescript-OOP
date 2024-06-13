"use strict";
var getterSetter;
(function (getterSetter) {
    class Category {
        get name() {
            if (this._name) {
                return this._name;
            }
            else {
                return "empty";
            }
        }
        set name(value) {
            if (value !== "") {
                this._name = value;
            }
        }
    }
    const category = new Category();
    console.log(category.name);
    category.name = "Food";
    console.log(category.name);
    category.name = "";
    console.log(category.name);
})(getterSetter || (getterSetter = {}));
