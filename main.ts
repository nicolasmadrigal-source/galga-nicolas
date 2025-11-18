controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d f f f d f . . 
        . . f d d d d d d d d d d f . . 
        . . f f d d d d d d d 1 1 f . . 
        . . . f f f d d d d d 1 1 f f . 
        . . f d d d f f f f f f f d f . 
        . . f d d d d d d d d d d d f . 
        . . f d d d d d d d d f d d f . 
        . . f d d d d d d d d f d f f . 
        . . f f d d d d d d d f f d f . 
        . . . f d d d d d d d d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f f f f f d d f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d f f f d f . . 
        . . f d d d d d d d d d d f . . 
        . . f f d d d d d d d 1 1 f . . 
        . . f f f f d d d d d 1 1 f f . 
        . . f d d d f f f f f f f d f . 
        . . f d d d d d d d d d d d f . 
        . . f d d d d d d d d f d d f . 
        . . f d d d d d d d d f d f f . 
        . . f f d d d d d d d f f d f . 
        . . . f d d d d d d d d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f d d f f f f f . . . . 
        `],
    200,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d f f f d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f 1 1 d d d d d d d f f . . 
        . f f 1 1 d d d d d f f f . . . 
        . f d f f f f f f f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f d d f d d d d d d d d f . . 
        . f f d f d d d d d d d d f . . 
        . f d f f d d d d d d d f f . . 
        . f d d d d d d d d d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f d d f f f f f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d f f f d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f 1 1 d d d d d d d f f . . 
        . f f 1 1 d d d d d f f f f . . 
        . f d f f f f f f f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f d d f d d d d d d d d f . . 
        . f f d f d d d d d d d d f . . 
        . f d f f d d d d d d d f f . . 
        . f d d d d d d d d d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f f f f f d d f . . . . 
        `],
    200,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d f f d d f f d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . f f d d d d d d d d d d f f f 
        . f d d d d d d d d d d d d d f 
        . f d d d f d d d d d d f d f f 
        . f d f d f f d d f d d f d f f 
        . f d f d d f f f f d d d d d f 
        . f d f f f d d d d d d f f f . 
        . f d d d f f f f f d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f d d f f d d f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d f f d d f f d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        f f f d d d d d d d d d d f f . 
        f d d d d d d d d d d d d d f . 
        f f d f d d d d d d f d d d f . 
        f f d f d d f d d f f d f d f . 
        f d d d d d f f f f d d f d f . 
        . f f f d d d d d d f f f d f . 
        . . . f d d f f f f f d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f d d f f d d f . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d f f f d f . . 
        . . f d d d d d d d d d d f . . 
        . . f f d d d d d d d 1 1 f . . 
        . . f f f f d d d d d 1 1 f f . 
        . . f d d d f f f f f f f d f . 
        . . f d d d d d d d d d d d f . 
        . . f d d d d d d d d f d d f . 
        . . f d d d d d d d d f d f f . 
        . . f f d d d d d d d f f d f . 
        . . . f d d d d d d d d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f f f f f d d f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d f f f d f . . 
        . . f d d d d d d d d d d f . . 
        . . f f d d d d d d d 1 1 f . . 
        . . f f f f d d d d d 1 1 f f . 
        . . f d d d f f f f f f f d f . 
        . . f d d d d d d d d d d d f . 
        . . f d d d d d d d d f d d f . 
        . . f d d d d d d d d f d f f . 
        . . f f d d d d d d d f f d f . 
        . . . f d d d d d d d d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f d d f f f f f . . . . 
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d f f f d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f 1 1 d d d d d d d f f . . 
        . f f 1 1 d d d d d f f f f . . 
        . f d f f f f f f f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f d d f d d d d d d d d f . . 
        . f f d f d d d d d d d d f . . 
        . f d f f d d d d d d d f f . . 
        . f d d d d d d d d d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f d d f f f f f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d f f f d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f 1 1 d d d d d d d f f . . 
        . f f 1 1 d d d d d f f f f . . 
        . f d f f f f f f f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f d d f d d d d d d d d f . . 
        . f f d f d d d d d d d d f . . 
        . f d f f d d d d d d d f f . . 
        . f d d d d d d d d d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f f f f f d d f . . . . 
        `],
    200,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 4 4 . . . . 
        . . . . . . 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 4 . . . 
        . . . . . 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 4 4 4 4 . . 
        . . . . 4 4 4 4 4 4 4 4 4 4 . . 
        . . . . 4 4 4 4 4 4 4 4 4 4 . . 
        . . . . 4 4 4 4 4 4 4 4 4 4 . . 
        . . . . 4 4 4 4 4 4 4 4 4 4 . . 
        . . . . . 4 4 4 4 4 4 4 4 . . . 
        . . . . . . 4 4 4 4 4 4 . . . . 
        . . . . . . . 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . f f d d d d d d d d d d f f . 
        . f d d d d d d d d d d d d f . 
        . f d d d d d d d d d d d d f . 
        . f d d d d d d d d d d d d f . 
        . f d d d d d d d d d d d d f . 
        . f d d f f f f f f f f d d f . 
        . f d d f d d f f d d f d d f . 
        . f f f f d d f f d d f f f f . 
        . . . . f d d f f d d f . . . . 
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d f f d d f f d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . f f d d d d d d d d d d f f f 
        . f d d d d d d d d d d d d d f 
        . f d d d f d d d d d d f d f f 
        . f d f d f f d d f d d f d f f 
        . f d f d d f f f f d d d d d f 
        . f d f f f d d d d d d f f f . 
        . f d d d f f f f f d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f d d f f d d f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d f f d d f f d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        f f f d d d d d d d d d d f f . 
        f d d d d d d d d d d d d d f . 
        f f d f d d d d d d f d d d f . 
        f f d f d d f d d f f d f d f . 
        f d d d d d f f f f d d f d f . 
        . f f f d d d d d d f f f d f . 
        . . . f d d f f f f f d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f d d f f d d f . . . . 
        `],
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . f f d d d d d d d d d d f f . 
        . f d d d d d d d d d d d d f . 
        . f d d d d d d d d d d d d f . 
        . f d d d d d d d d d d d d f . 
        . f d d f d d d d d d f d d f . 
        . f d d f d d d d d d f d d f . 
        . f d d f f f f f f f f d d f . 
        . f f f f d d f f d d f f f f . 
        . . . . f d d f f d d f . . . . 
        `],
    200,
    false
    )
})
let bogey: Sprite = null
let projectile: Sprite = null
let hero: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f f f . . 
    . . . . . f f 5 1 5 5 5 5 f 4 2 
    . . . . f f 5 5 f 5 5 5 5 f 2 2 
    . . f f f 5 5 5 5 5 5 5 5 f 5 4 
    . . f f f 2 2 5 5 5 5 5 5 f 2 2 
    . . . . f f 5 5 5 5 5 5 5 f 4 5 
    . . . . . f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
mySprite.setStayInScreen(true)
info.setLife(3)
music.play(music.stringPlayable("D C5 B F A G B C5 ", 500), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        ................................
        ................................
        ................................
        .......8888888888888888.........
        .......8888888888888888.........
        .....bb8888888888888888.........
        .....bb8888888888888888bb.......
        ...bbbb8888888888888888bb.......
        ...bbbbbbbbbbbbbbbbbbbbbbb......
        ...bbbbbbbb88888888bbbbbbbb.....
        ...bbbbb11188888888111bbbbb.....
        ...bbbbb22288888888222bbbbb.....
        ..111bbb9ff88888888ff9bbb111....
        ..111bbb22288888888222bbb111....
        ..11188888888888888888888111....
        ..11188888888888888888888111....
        ..11188888888888888888888111....
        ..11188888888888888888888111....
        ..11188888888888888888888111....
        ...88888bb111111111bbb88888.....
        ...88888bb122222221bbb88888.....
        ...88888b11222ff22111b88888.....
        ..888888b11222ff22111b888888....
        ..888888b112222222111b888888....
        ..888888bbb11111111bbb888888....
        ..88888888888888888888888888....
        ..88888888888888888888888888....
        ...888888888888888888888888.....
        ...888888888888888888888888.....
        ...888888888888888888888888.....
        ................................
        ................................
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    mySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
