input.onButtonPressed(Button.A, function () {
    contador = 0
})
let contador = 0
contador = -1
basic.forever(function () {
    contador += -1
    basic.showNumber(contador)
    if (contador < 1) {
        contador = 10
        basic.pause(100)
    }
})
