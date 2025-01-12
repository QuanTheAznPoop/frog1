const username = require("./signup.htm");
const password = require("./signup.htm");
const gender = require("./signup.htm");

const accountcreated = require("./frog.js");
const userData = new accountcreated({
_username: username, _password: password, _gender: gender
})
accountcreated.save().then(dataLog => console.log(dataLog));
module.exports = {userData};
