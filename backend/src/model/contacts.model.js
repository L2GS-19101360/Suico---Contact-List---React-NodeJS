'use strict'

var dbConn = require('../../config/db.config');

var Contacts = function(contact){

    this.image = contact.image;
    this.firstname = contact.firstname;
    this.lastname = contact.lastname;
    this.email = contact.email;
    this.contactnumber = contact.contactnumber;
    this.registered = new Date();
    this.updated = new Date();

};

Contacts.findAll = function(result){
    dbConn.query("SELECT * FROM contacts", function(err, res){
        if (err){
            console.log("Error: ", err);
            result(null, err);
        }
        else{
            console.log("Contacts: ", res);
            result(null, res);
        }
    });
};

module.exports = Contacts