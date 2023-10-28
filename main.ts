basic.forever(function () {
    if (input.lightLevel() > 200) {
        MotorDriver.MotorRun(Motor.A, Dir.backward, 16)
        MotorDriver.MotorRun(Motor.B, Dir.backward, 16)
        basic.showIcon(IconNames.Heart)
    } else {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        basic.showIcon(IconNames.No)
    }
})
