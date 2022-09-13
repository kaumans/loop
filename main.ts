let RandomNumber = 0
input.onGesture(Gesture.Shake, function () {
    RandomNumber = randint(0, 2)
    if (RandomNumber == 0) {
        basic.showString("Answer Unclear")
    } else if (RandomNumber == 1) {
        basic.showString("No")
    } else {
        basic.showString("Yes")
    }
})
basic.forever(function () {
	
})
