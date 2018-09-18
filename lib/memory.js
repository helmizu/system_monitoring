const si = require('systeminformation')
const Memory = {}
const config = require('../config')
Memory.monitoring = function () {
    si.mem()
    .then(data => {
        const memPer = (data.active / data.total) * 100
        console.log("RAM Usage")
        console.log(`${memPer.toFixed(2)}%`)
        if ( memPer > config.AlertRAM ) {
            console.log(`your RAM use more than 70%`)
        }
    })
    .catch(error => console.error(error));
}

module.exports = Memory