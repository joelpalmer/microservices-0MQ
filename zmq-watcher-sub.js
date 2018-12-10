'use strict';
const zmq = require('zeromq');

// create subscriber endpoint
const subscriber = zmq.socket('sub');

// subscribe to all messages
subscriber.subscribe('');

// handle messages from the publisher
subscriber.on('message', data => {
    const message = JSON.parse(data);
    const date = new Date(message.timestamp);
    console.log(`File "${message.file}" changed at ${date}`);
});

// connect to publisher
subscriber.connect("tcp://localhost:60400");