const si = require('systeminformation')
const config = require('../config')
const slack = require('../modules/Slack')
const Memory = {}
Memory.monitoring = function () {
    si.mem()
    .then(data => {
        const memPer = (data.active / data.total) * 100
        console.log("RAM Usage")
        console.log(`${memPer.toFixed(2)}%`)
        if ( memPer > config.AlertRAM ) {
            slack.send('your RAM use more than 70%', function (err, res, body) {
                if (err) throw err
                console.log('notif sent to slack')
            })
        }
    })
    .catch(error => console.error(error));
}

module.exports = Memory