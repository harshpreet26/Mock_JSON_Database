const fs = require('fs');
const filePath = '../database.json';
const { readData, writeData } = require('../utils/file.js');

async function createUsers(req, res) {
    try {
        const data = await readData();


        //determine last userid
        const lastUser = data.users[data.users.length - 1];

        // what happens if there are no users?
        const lastUserId = lastUser ? lastUser.id + 1 : 1;

        const newUser = {
            id: nextId,
            usernsme: req.body.username,
            first_name: req.body.first_name,
            email: req.body.email
        };

        //push the data to memory object
        data.users.push(newUser);

        //write to the file
        await writeData(data);
        
        
        res.redirect('/home');
    } catch (error) {
        return res.status(500).send(`internal server error: ${error.message}`);
    }
}