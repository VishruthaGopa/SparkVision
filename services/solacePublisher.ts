import Paho from 'paho-mqtt';

// need put uri + any passwords in diff file and import as vars 
const client = new Paho.Client('ssl://mr-connection-dbo83q99b3a.messaging.solace.cloud:8883', 'solace-cloud-client');