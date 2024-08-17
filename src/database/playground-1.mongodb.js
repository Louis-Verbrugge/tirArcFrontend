/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.

//db = db.getSiblingDB('mongodbVSCodePlaygroundDB');

function createCollection() {
  db.createCollection('sales');
}


// Create a collection named 'databaseUsers'.

function addData() {
  db.getCollection('sales').insertMany([
    { 'name': 'abc1111uuuuuuuuuuuuuuuuuuuuuu', 'email': "lought" },
    { 'name': 'abc1111uuuuuuuuuuuuuuuuuuuu', 'email': "lougdsqht", 'age': 19 },
    { 'name': 'abc1111uuuuuuuuuuuuuuuuuuuuuuuu', 'email': "loughtlought", 'age': 10 },
    { 'name': 'abc1111uuuuuuuuuuuuuuuuuu', 'email': "loughtdsq", 'age': 20 }
  ]);
};


function getData() {
  return db.getCollection('sales').find({});
}

//console.log(testt)