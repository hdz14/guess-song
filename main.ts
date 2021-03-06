basic.showString("START")
let score = 0
for (let index = 0; index <= 3; index++) {
    if (index == 1) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        while (true) {
            basic.showString("1ST")
            if (input.buttonIsPressed(Button.A)) {
                score += 2
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.logoIsPressed()) {
                score += 0
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                score += -1
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
        }
    }
    if (index == 2) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        while (true) {
            basic.showString("2ND")
            if (input.buttonIsPressed(Button.A)) {
                score += 2
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.logoIsPressed()) {
                score += 0
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                score += -1
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
        }
    }
    if (index == 3) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
        while (true) {
            basic.showString("3RD")
            if (input.buttonIsPressed(Button.A)) {
                score += 2
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.logoIsPressed()) {
                score += 0
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                score += -1
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
        }
    }
}
basic.showNumber(score)
