function BuildBrain () {
    let list: number[] = []
    matrix = []
    for (let index = 0; index <= 9; index++) {
        matrix.push(randint(1, 2))
    }
    pick = 1
    list[9] = pick
    pick = 2
    list[8] = pick
    pick = 1
    list[7] = pick
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
    }
})
input.onButtonPressed(Button.B, function () {
    pick = 2
    basic.showNumber(pick)
    TOTAL += pick
    basic.showNumber(TOTAL)
    if (TOTAL == 10) {
        state = "human-win"
        basic.showString("@%$% YOU win #@$")
    } else {
        state = "computer"
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
let matrix: number[] = []
let pick = 0
let state = ""
let TOTAL = 0
BuildBrain()
let states = ["null", "computer", "human", "comp-win", "human-win"]
TOTAL = 0
state = states[randint(1, 2)]
while (true) {
    basic.showNumber(TOTAL)
    if (state == "computer") {
        Thinking()
        pick = matrix.removeAt(0)
        basic.showNumber(pick)
        basic.pause(100)
        TOTAL += pick
        basic.showNumber(TOTAL)
        if (TOTAL == 10) {
            state = "comp-win"
            basic.showString("I win!!!")
        } else {
            state = "human"
        }
    }
}
