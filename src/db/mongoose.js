const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})


//mongoose.model takes string name & definition
const User = mongoose.model('User', {
    name: { type: String, required: true,trim: true},
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            // console.log("hijiji",validator.isEmail(value));
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }


        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    //password field
    
    password: {
        type: String,
        required: true,
        minlength: 7,  //minlength is a mongoose method
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                // console.log("hijiihi",value.toLowerCase().includes('password'))
                throw new Error('Password cannot contain "password"')}
            }
        }

    

})

// const me = new User({
//     name: '  yeasin9     ',
//     email: '  yeasin@GMAIL.com', 
//     // password: 'password'
//     password: 'ord1234'

// })

// // //save the user  by gc
// // //  me.save().then((me)=>{console.log(me)}).catch((error)=>{console.log(error)})

// // // me.save().then(()=>{}).catch((error)=>{})  syntax
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })



// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser: true,
//     useCreateIndex: true
// })


//mongoose.model takes string name & definition
const Task = mongoose.model('Task', {
    dsc: { type: String,trim: true,required: true},
    complete: { type: Boolean,default: false },

})

// task creation 
const tsk1 = new Task({
    dsc: 'eat in SE',
    // complete: true

})
// task save
tsk1.save().then(()=>{
    console.log(tsk1)
}).catch((error)=>{
    console.log('Error',error)
})