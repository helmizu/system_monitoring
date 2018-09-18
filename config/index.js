const config = {
    Interval : 1, //in Seconds
    DiskMonitoring : ['/dev/sdb5', '/dev/loop22', '/dev/loop24'], //array
    AlertRAM : 70, //persent use
    AlertStorage : 70 //persent use
}

module.exports = config