const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sistema:admin1223@novared.dhyhptp.mongodb.net/?retryWrites=true&w=majority', {

})
.then(db => console.log('Db is connected'))
.catch(err => console.error(err));