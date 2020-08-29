require('dotenv').config();

//console.log(process.env.HELLO);

const app = require('./server');

require('./database');

app.listen(app.get('port'), ()=>{
    console.log('server on port',app.get('port'));
});