const si = require('systeminformation')
const async = require('async')
const _ = require('lodash')
const config = require('../config') 
let jobs = {}
var Disk = {}
Disk.Monitoring = []
Disk.log = []

jobs.filtering = (cb) => {
    si.fsSize()
    .then(data => {
        config.DiskMonitoring.forEach(disk => {
            Disk.Monitoring.push(_.find(data, {fs : disk}))
        })
        return cb(null, Disk.Monitoring)
    })
}

jobs.monitoring = (cb) => {
    Disk.Monitoring.forEach((disk) => {
        Disk.log.push(`${disk.fs} : ${disk.use}%`)
        if (disk.use > config.AlertStorage && disk.use !== 100) {
            console.log(`storage ${disk.fs} use more than 70%`)
        }
    })
    return cb(null, Disk.log)
}

jobs.print = (cb) => {
    console.log("Disk Usage")
    Disk.log.forEach(use => {
        console.log(use)
    })
    cb (null, null)
}

Disk.print = function (){
    async.series(jobs, (err, res) => {
        if (err) throw err
        Disk.Monitoring = []
        Disk.log = []
    })
}

module.exports = Disk