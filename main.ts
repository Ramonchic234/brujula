input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        if (input.compassHeading() > -22.5 && input.compassHeading() < 22.5) {
            basic.showString("N")
        } else if (input.compassHeading() > 75 && input.compassHeading() < 105) {
            basic.showString("E")
        } else if (input.compassHeading() > 165 && input.compassHeading() < 195) {
            basic.showString("S")
        } else if (input.compassHeading() > 255 && input.compassHeading() < 285) {
            basic.showString("O")
        }
    }
})
