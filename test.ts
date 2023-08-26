fastForever.fastForever(function () {
    count += 1
})
let count = 0
let count2 = 0
loops.everyInterval(1000, function () {
    serial.writeValue("count", count)
    serial.writeValue("count2", count)
    count = 0
    count2 = 0
})

fastForever.fasterForever(1000, function () {
    count2 += 1
})