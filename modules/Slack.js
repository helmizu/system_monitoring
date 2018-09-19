const request = require('request')
const Slack = {}
var SLACK_WEBHOOK_URL = ""

Slack.init = function (URL) {
    if (!SLACK_WEBHOOK_URL || SLACK_WEBHOOK_URL === "") {
        throw new Error("You need to specify an SLACK_WEBHOOK_URL");
    }
    SLACK_WEBHOOK_URL = URL
}

Slack.send = function(message, cb) {
    let slackPayload = {
        text: `${message}`
    }
    request({
        method: 'POST',
        uri: SLACK_WEBHOOK_URL,
        body: slackPayload,
        json: true
    }, (err, result, body) => {
        if (err) return console.log(`Error posting to Slack: ${err}`)
        cb()
    })
}

module.exports = Slack;