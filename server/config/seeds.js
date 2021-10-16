const db = require('./connection');
const { user, medlist } = require('../models');
var faker = require('faker');
var firstName = faker.name.firstName();
var lastName = faker.name.lastName();
var randomEmail = faker.internet.email();
var randomUsername = faker.internet.userName();
var randomPassword = faker.internet.password();

db.once('open', async () => {
    await user.deleteMany();
    await user.create({
        firstName: firstName,
        lastName: lastName,
        username: randomUsername,
        email: randomEmail,
        password: randomPassword,
        medlist: []
});
await user.create({
    firstName: firstName,
    lastName: lastName,
    username: randomusername,
    email: randomEmail,
    password: randomPassword,
    medlist: []
});
await user.create({
    firstName: firstName,
    lastName: lastName,
    username: randomusername,
    email: randomEmail,
    password: randomPassword,
    medlist: []
});
await user.create({
    firstName: firstName,
    lastName: lastName,
    username: randomusername,
    email: randomEmail,
    password: randomPassword,
    medlist: []
});
process.exit();
}
);