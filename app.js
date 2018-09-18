var Memory = require('./lib/memory')
var Disk = require('./lib/disk')

setInterval(function () {
  console.log("-----------------------------")
  console.log(new Date().toLocaleTimeString())
  Memory.monitoring()
  Disk.print()
}, 1000)