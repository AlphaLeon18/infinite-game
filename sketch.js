var spaceImg, space;
var shipImg, ship;
var meteorImg, meteor;
var gameState = "play"


function preload() {
    shipImg = loadImage("space.png");
    spaceImg = loadImage("space ship.png");
    meteorImg = loadImage("meteor.png")

    function setup() {
        createCanvas(600, 600);
        space = createSprite(300, 300);
        space.addImage("space", spaceImg);
        space.velocityY = 1;

        ship = createSprite(300, 300)
        ship.addImage(shipImg);
        ship.scale = 0.3

        metorGroup = new Group()


    }

    function draw() {
        background(200);
        if (gameState === "play") {

            if (space.y > 400) {
                space.y = 300
            }

            drawSprites()

            if (keyDown("space")) {
                ship.velocityY = -10
            }
            if (keyDown("left")) {
                ship.x -= 5
            }
            if (keyDown("right")) {
                ship.x += 5
            }
            spawnMeteor()

            if (meteorGroup.isTouching(ship) || ship.y > 600) {
                gameState = "end"
            }
        }
        if (gameState === "end") {
            fill("yellow")
            text("Game Over", 230, 250)
            space.velocityY = 0
            meteorGroup.setVelocityYEach(0)


        }

        ship.velocityY = ship.velocityY + 0.8

    }

    function spawnMeteor() {
        if (frameCount % 200 === 0) {
            meteor = createSprite(200, -50)
            meteor.addImage(doorImg)

            meteor.x = Math.round(random(120, 400))
            meteor.velocityY = 1
            meteorsGroup.add(door)
            meteor.lifetime = 800


            ship.depth = space.depth
            ship.depth += 1

        }
    }
}