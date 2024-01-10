let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 22.5 || degrees > 337.5) {
        basic.showString("N")
    } else if (degrees < 67.5) {
        basic.showString("NE")
    } else if (degrees < 112.5) {
        basic.showString("E")
    } else if (degrees < 157.5) {
        basic.showString("SE")
    } else if (degrees < 202.5) {
        basic.showString("S")
    } else if (degrees < 247.5) {
        basic.showString("SW")
    } else {
        basic.showString("West")
    }
})
