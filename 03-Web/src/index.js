"use strict";
exports.__esModule = true;
var User_1 = require("./models/User");
var user = new User_1.User({ name: 'myname2', age: 20 });
user.set({ name: 'newname', age: 9999 });
console.log(user.get('name'));
console.log(user.get('age'));
