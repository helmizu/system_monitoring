const Memory = require('./lib/memory')
const Disk = require('./lib/disk')
const config = require('./config')
setInterval(function () {
  console.log("-----------------------------")
  console.log(new Date().toLocaleTimeString())
  Memory.monitoring()
  Disk.print()
}, 1000 * config.Interval)