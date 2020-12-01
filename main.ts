function BuildBrain () {
    Thinking()
    matrix = []
    for (let index = 0; index <= 10; index++) {
        matrix.push(randint(1, 2))
    }
    pick = 1
    matrix[9] = pick
    pick = 2
    matrix[8] = pick
    pick = 1
    matrix[7] = pick
    states = ["null", "computer", "human", "comp-win", "human-win"]
    TOTAL = 0
    state = states[randint(1, 2)]
    if (state == "human") {
        basic.showString("H")
    } else {
        basic.showString("C")
    }
    basic.showNumber(TOTAL)
}
input.onButtonPressed(Button.A, function () {
    pick = 1
    basic.showNumber(pick)
    TOTAL += pick
    basic.showNumber(TOTAL)
    if (TOTAL == 10) {
        state = "human-win"
        basic.showString("@%$% YOU win #@$")
    } else {
        state = "computer"
        basic.showString("C")
        basic.showNumber(TOTAL)
    }
})
input.onButtonPressed(Button.AB, function () {
    BuildBrain()
})
input.onButtonPressed(Button.B, function () {
    pick = 2
    basic.showNumber(pick)
    TOTAL += pick
    basic.showNumber(TOTAL)
    if (TOTAL >= 10) {
        state = "human-win"
        basic.showString("@%$% YOU win #@$")
    } else {
        state = "computer"
        basic.showString("C")
        basic.showNumber(TOTAL)
    }
})
function Thinking () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . # . #
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    }
}
let states: string[] = []
let TOTAL = 0
let matrix: number[] = []
let pick = 0
let state = ""
BuildBrain()
while (true) {
    if (state == "computer") {
        Thinking()
        pick = matrix[TOTAL]
        basic.showNumber(pick)
        basic.pause(100)
        TOTAL += pick
        basic.showNumber(TOTAL)
        if (TOTAL >= 10) {
            state = "comp-win"
            basic.showString("I win!!!")
        } else {
            state = "human"
            basic.showString("H")
            basic.showNumber(TOTAL)
        }
    }
    basic.pause(100)
}
