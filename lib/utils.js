function convertGB(Byte = 0) {
    return `${Byte/ 1000000000} GB`
}
function convertTime(Time = 0) {
    return new Date(Time).toLocaleTimeString()
}
module.exports = { convertGB, convertTime }