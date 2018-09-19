const config = {
    Interval : 60 * 5, //in Seconds
    DiskMonitoring : ['/dev/sdb5'], //array
    AlertRAM : 70, //persent use
    AlertStorage : 70, //persent use
    SlackWebhookURL : '' //add your slack webhook url
}

module.exports = config