# Installation
* clone or download zip this repo
* install all dependencies
    * do `npm install` in terminal
* set up config file in `config/index.js`
```
const config = {
    Interval : 60 * 5, //in Seconds
    DiskMonitoring : ['/dev/sdb5'], //array
    AlertRAM : 70, //persent use
    AlertStorage : 70, //persent use
    SlackWebhookURL : '' //add your slack webhook url
}
```
* start this app with `npm start`