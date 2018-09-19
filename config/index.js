const config = {
    Interval : 1, //in Seconds
    DiskMonitoring : ['/dev/sdb5', '/dev/loop22', '/dev/loop24'], //array
    AlertRAM : 70, //persent use
    AlertStorage : 70, //persent use
    SlackWebhookURL : 'https://hooks.slack.com/services/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'
}

module.exports = config