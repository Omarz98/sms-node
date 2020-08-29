const config = require('../config');
const client = require('twilio')(config.accountSid, config.authToken);

async function sendMessage(body, phone){
    //console.log('message sended');
    try {
        const message = await client.messages.create({
            to: phone,
            from: '+12055741470',
            body
        })
        //console.log(message.sid);
        return message;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {sendMessage}

