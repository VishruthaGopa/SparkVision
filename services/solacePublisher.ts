const Paho = require('paho-mqtt');
global.WebSocket = require('ws');

// need put uri + any passwords in diff file and import as vars 
const client = new Paho.Client('wss://mr-connection-dbo83q99b3a.messaging.solace.cloud:8443/mqtt', 'uid1');
const connectOptions = {
    userName: "solace-cloud-client",
    password: "fd844db9bk5isklnl3d77a09hf", // hide
}

// Connect the client
client.connect({
    ...connectOptions,
    onSuccess: () => {
        console.log("Connected successfully.");
        console.log("Is connected:", client.isConnected());
        /*alert = true; // for now
        while (true) { // connection loop
            // alert = fireDetected()
            if (alert) { // replace with a function like fireDetected() 
                client.publish("userTopic", "test msg", 2, false); // works - gets added to queue
            }
            alert = false;
        }*/

        let alertChecking = setInterval(() => { // can either do loop or interval 
            let alert = true; //fireDetected()
            if (alert) {
                client.publish("userTopic", "Fire detected!", 2, false); // works - gets added to queue
                console.log("msg sent");
            }
        }, 1000);
    },
    onFailure: (err) => {
        console.error("Connection failed:", err.errorMessage);
    },
});

// need to format msg payload properly w/ timestamp etc. 
    // it should get payload from fireDetected ? 