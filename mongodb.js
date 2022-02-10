//crud create read update delete
//basic declaration
// const mongodb = require('mongodb');
// // const MongoClient = require('mongodb').MongoClient;
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;


// const {MongoClient, ObjectId} = require('mongodb');


// //conection url and database
// // const url = 'mongodb://localhost:27017'; ///dont use it, it slows down the process
// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';


// const id = new ObjectId();
// console.log(id);
// // console.log(id.id);  //binary data buffer
// console.log(id.id.length);  //binary data buffer length
//  console.log(id.toHexString().length);
// console.log(id.getTimestamp());


//use mongoclient  insertone way1 : 
// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database');
//     }
//     // console.log('Connected correctly');
//     const db = client.db(databaseName);
//     db.collection('users').insertOne({
//         _id: id,
//         name: 'tamim',
//         age: 23
//     })
// })





//  insertone and catching error  way 2
// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    //if no error, then connect to database
    // const db = client.db(databaseName);
    //insert data
    // db.collection('users').insertOne({
    //     name: 'Raj',
    //     age: 23
    // }, (error, result) => {

    //     if (error) {
    //         return console.log('Unable to insert user');
    //     } //if no error, then insert user
    //     console.log(result.ops);
    // })

// })


// insertmany in database
// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     // if no error, then connect to database
//     const db = client.db(databaseName);
//     //insert data in task collection
//     db.collection('tasks').insertMany([                   
//         {
//             name: 'sakin ahmed',
//             age: 23
//         }
//         ,
//         {
//             name: 'Raj2',
//             age: 24
//         }
//     ], (error, result) => {
//     if (error) {
//                     return console.log('Unable to insert user');
//                 } //if no error, then insert user
//                 console.log(result);
//             })
// })


//video 78 //querying document 

const {MongoClient, ObjectId} = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }
    
    const db = client.db(databaseName);
    // db.collection('users').findOne({_id:new ObjectId("62036d22f6dfeacc165c4cee")},(error, user) => {
    //   if (error) {
    //     return console.log('Unable to fetch');
    //   }

    //     console.log(user);
    // })
    
    //find
    // db.collection('users').find({age:23}).toArray((error,users)=>{
    //     console.log(users);
    // })
    // db.collection('users').find({age:23}).count((error,count)=>{
    //     console.log(count);
    // })


    // db.collection('tasks').findOne({_id:new ObjectId("62036598d70a84b9041412d7")},(error,tasks)=>{
    //     if (error) {
    //             return console.log('Unable to fetch');
    //           }
        
    //             console.log(tasks);

    // })

    db.collection('tasks').find({age:23}).toArray((error,tasks)=>{
        if (error) {
                return console.log('Unable to fetch');
              }
        
                console.log(tasks);

    })
    
})