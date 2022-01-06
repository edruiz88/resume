'use strict'
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });
const ints = require('../chatbot/intents');
// const moment = require('moment')

const trainChatBotIA = async()=>{
    return new Promise(async (resolve, reject) => {

        ints.ques.forEach((e,i)=>{
            manager.addDocument(e.lang, e.msg, e.type);
        })

        ints.answ.forEach((e,i)=>{
            manager.addAnswer(e.lang, e.type, e.msg);
        })


    // Adds the utterances and intents for the NLP
    //     manager.addDocument('en', 'goodbye for now', 'greetings.bye');
    //     manager.addDocument('en', 'bye bye take care', 'greetings.bye');
    //     manager.addDocument('en', 'okay see you later', 'greetings.bye');
    //     manager.addDocument('en', 'bye for now', 'greetings.bye');
    //     manager.addDocument('en', 'i must go', 'greetings.bye');
    //     manager.addDocument('en', 'hello', 'greetings.hello');
    //     manager.addDocument('en', 'hi', 'greetings.hello');
    //     manager.addDocument('en', 'howdy', 'greetings.hello');
    // // Train also the NLG
    //     manager.addAnswer('en', 'greetings.bye', 'Till next time');
    //     manager.addAnswer('en', 'greetings.bye', 'see you soon!');
    //     manager.addAnswer('en', 'greetings.hello', 'Hey there!');
    //     manager.addAnswer('en', 'greetings.hello', 'Greetings!');
await manager.train();
        manager.save();
        console.log("AI has been trainded")
        resolve(true);
    })
}

const ioEvents = async(io, socket) => {
    async function generateResponseAI(qsm) {
        // Train and save the mode
        return new Promise(async (resolve, reject) => {
            let response = await manager.process('en', qsm);
            resolve(response);
        })
    }

// socket.on('join', (userId) => {
//     socket.join(userId);
//     console.log("New user joined!")
// });

socket.on('send_res', async function (data) {
    let response = await generateResponseAI(data);
    io.to(socket.id).emit('bot_reply', response.answer !== undefined
        ? response.answer : "I am sorry, I don't understand :( ");
    })
};
module.exports = {ioEvents, trainChatBotIA};