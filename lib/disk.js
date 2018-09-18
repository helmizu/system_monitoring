const si = require('systeminformation')
const async = require('async')
const _ = require('lodash')
const diskFilter = ['/dev/sdb5', '/dev/loop22', '/dev/loop24']
let jobs = {}
var Disk = {}
Disk.Monitoring = []
Disk.log = []

jobs.filtering = (cb) => {
    si.fsSize()
    .then(data => {
        diskFilter.forEach(disk => {
            Disk.Monitoring.push(_.find(data, {fs : disk}))
        })
        return cb(null, Disk.Monitoring)
    })
}

jobs.monitoring = (cb) => {
    Disk.Monitoring.forEach((disk) => {
        Disk.log.push(`${disk.fs} : ${disk.use}%`)
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