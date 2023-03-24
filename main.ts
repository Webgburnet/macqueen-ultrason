function ColorStrip (color1: number, color2: number, color3: number, color4: number) {
    strip.setPixelColor(0, color1)
    strip.setPixelColor(1, color2)
    strip.setPixelColor(2, color3)
    strip.setPixelColor(3, color4)
    strip.show()
}
function D () {
    DroiteLent(255)
}
function DroiteLent (vitesse: number) {
    basic.showArrow(ArrowNames.East)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, vitesse)
    ColorStrip(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Green))
}
function DroiteRapide (vitesse1: number, vitesse2: number) {
    basic.showArrow(ArrowNames.East)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, vitesse1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, vitesse2)
    ColorStrip(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Green))
}
function ArG () {
	
}
function AvD () {
    DroiteRapide(255, 255)
}
function Reculer (vitesse: number) {
    basic.showArrow(ArrowNames.South)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, vitesse)
    ColorStrip(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red))
}
function G () {
    GaucheLent(255)
}
function GaucheRapide (vitesse1: number, vitesse2: number) {
    basic.showArrow(ArrowNames.West)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vitesse1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, vitesse2)
    ColorStrip(neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Red))
}
function AvG () {
    GaucheRapide(255, 255)
}
function Ar () {
    Reculer(255)
}
function Avancer (vitesse: number) {
    basic.showArrow(ArrowNames.North)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, vitesse)
    ColorStrip(neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green))
}
function GaucheLent (vitesse: number) {
    basic.showArrow(ArrowNames.West)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vitesse)
    ColorStrip(neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Red))
}
function ArD () {
	
}
function Stop () {
    basic.showIcon(IconNames.Heart)
    ColorStrip(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Yellow), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Blue))
    maqueen.motorStop(maqueen.Motors.All)
}
function Av () {
    Avancer(255)
}
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.White))
basic.pause(2000)
ColorStrip(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Yellow), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Blue))
strip.show()
basic.pause(2000)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        AvD()
    } else {
        Av()
    }
})
