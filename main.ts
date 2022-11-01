servos.P0.setRange(0, 170)
basic.forever(function () {
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    10,
    170
    ), 0)
    servos.P0.run(100)
    basic.pause(100)
})
