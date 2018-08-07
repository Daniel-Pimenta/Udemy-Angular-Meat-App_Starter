"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "email1@gmail.com": new User('email1@gmail.com', 'Usuario 1', 'senha123'),
    "email2@gmail.com": new User('emails@gmail.com', 'Usuario 2', 'senha123')
};
