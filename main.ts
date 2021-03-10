function move_right (sprite: game.LedSprite, num: number) {
    sprite.move(num)
}
function fire (sprite: game.LedSprite, num: number) {
    bullet = game.createSprite(num, 4)
    bullet.change(LedSpriteProperty.Y, -1)
    bullet.change(LedSpriteProperty.Y, -1)
    bullet.change(LedSpriteProperty.Y, -1)
    bullet.change(LedSpriteProperty.Y, -1)
}
input.onButtonPressed(Button.A, function () {
    move_right(sprite, 1)
    x += 1
})
function move_left (sprite: game.LedSprite, num: number) {
    sprite.move(num)
}
input.onButtonPressed(Button.AB, function () {
    fire(bullet, x)
})
input.onButtonPressed(Button.B, function () {
    move_right(sprite, -1)
    x += -1
})
let bullet: game.LedSprite = null
let x = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
x = 2
basic.forever(function () {
	
})
