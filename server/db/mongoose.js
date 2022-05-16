const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://karmap9797:karmap9797@cluster0.2fbrq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
    }).then(
        console.log('connected')
    ).catch(err=>{
        console.error(err)
    })



