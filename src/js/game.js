

var car1, car2, car3, car4, bike1, bike2, bike3;
var car = new Image();
var bus = new Image();
var bikeModel = new Image();
var bikeModel2 = new Image();
var bikeModel3 = new Image();
var picape = new Image();
var bike = new Image();
var right, left, up, down;
var counter = 0;
right = false
left = false
up = false
down = false;

car.src = "images/car.png"
bus.src = "images/bus.png"
picape.src = "images/picape.png"
bike.src = "images/bike.png"
bikeModel.src = "images/bike2.png"
bikeModel2.src = "images/bike3.png"
bikeModel3.src = "images/bike4.png"

var background = new Image();
background.src = "images/r.jpg";
var selected;


function startGame() {
    counter = 0;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    mainBike = new component(75, 75, 7, 262, 550, 10);
    car1 = new component(75, 75, 1, 35, 10, 5);
    car2 = new component(75, 75, 2, 174, 10, 8);
    car3 = new component(75, 75, 3, 320, 10, 4);
    car4 = new component(75, 75, 1, 475, 10, 8);
    bike1 = new component(75, 75, 20, 125, 10, 8);
    bike2 = new component(75, 75, 21, 415, 0, 8);
    bike3 = new component(75, 75, 22, 270, 0, 3);
    myGameArea.start();
}

function selectImage(int) {
    switch (int) {
        case 1:
            bike.src = "images/bike.png"
            break;
        case 2:
            bike.src = "images/bike5.png"
            break;
        case 3:
            bike.src = "images/bike6.png"
            break;
    }
}

var myGameArea = {
    canvas: document.getElementById("game"),
    start: function () {
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 30);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, img, x, y, speed) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.img = img
    this.update = function () {
        ctx = myGameArea.context;
        // Make sure the image is loaded first otherwise nothing will draw.

        switch (this.img) {
            case 1:
                ctx.drawImage(car, this.x, this.y)
                break;
            case 2:
                ctx.drawImage(bus, this.x, this.y)
                break;
            case 3:
                ctx.drawImage(picape, this.x, this.y)
                break;
            case 20:
                ctx.drawImage(bikeModel, this.x, this.y)
                break;
            case 21:
                ctx.drawImage(bikeModel2, this.x, this.y)
                break;
            case 22:
                ctx.drawImage(bikeModel3, this.x, this.y)
                break;
            case 5:
                ctx.drawImage(bus, this.x, this.y)
                break;
            case 6:
                ctx.drawImage(picape, this.x, this.y)
                break;
            case 7:
                ctx.drawImage(bike, this.x, this.y)
                break;
        }

        if (
            (
                (
                    (mainBike.x - 10 < (car1.x + 75) && (mainBike.x - 10 > car1.x))
                    || (mainBike.x + 45 < (car1.x + 75) && (mainBike.x + 45 > car1.x))
                )
                && (mainBike.y > car1.y
                    && mainBike.y < car1.y + 150)
            )
            || ((mainBike.x + 25) < (car1.x + 90)
                && (mainBike.x + 25 > car1.x)
                && ((mainBike.y > car1.y)
                    && (mainBike.y < car1.y + 200))
            )
        ) {
            clearInterval(myGameArea.interval)
            document.getElementById('start-screen').style.display = 'block';
            document.getElementById('game').style.display = 'none'
        }
        else if (
            (
                (
                    (mainBike.x - 10 < (car2.x + 75) && (mainBike.x - 10 > car2.x))
                    || (mainBike.x + 45 < (car2.x + 75) && (mainBike.x + 45 > car2.x))
                )
                && (mainBike.y > car2.y
                    && mainBike.y < car2.y + 150)
            )
            || ((mainBike.x + 25) < (car2.x + 90)
                && (mainBike.x + 25 > car2.x)
                && ((mainBike.y > car2.y)
                    && (mainBike.y < car2.y + 200))
            )
        ) {
            clearInterval(myGameArea.interval)
            document.getElementById('start-screen').style.display = 'block';
            document.getElementById('game').style.display = 'none'
        }
        else if (
            (
                (
                    (mainBike.x - 10 < (car3.x + 75) && (mainBike.x - 10 > car3.x))
                    || (mainBike.x + 45 < (car3.x + 75) && (mainBike.x + 45 > car3.x))
                )
                && (mainBike.y > car3.y
                    && mainBike.y < car3.y + 150)
            )
            || ((mainBike.x + 25) < (car3.x + 90)
                && (mainBike.x + 25 > car3.x)
                && ((mainBike.y > car3.y)
                    && (mainBike.y < car3.y + 200))
            )
        ) {
            clearInterval(myGameArea.interval)
            document.getElementById('start-screen').style.display = 'block';
            document.getElementById('game').style.display = 'none'
        }
        else if (
            (
                (
                    (mainBike.x - 10 < (car4.x + 75) && (mainBike.x - 10 > car4.x))
                    || (mainBike.x + 45 < (car4.x + 75) && (mainBike.x + 45 > car4.x))
                )
                && (mainBike.y > car4.y
                    && mainBike.y < car4.y + 150)
            )
            || ((mainBike.x + 25) < (car4.x + 90)
                && (mainBike.x + 25 > car4.x)
                && ((mainBike.y > car4.y)
                    && (mainBike.y < car4.y + 200))
            )
        ) {
            clearInterval(myGameArea.interval)
            document.getElementById('start-screen').style.display = 'block';
            document.getElementById('game').style.display = 'none'
        }
        else if (
            (
                (
                    (mainBike.x - 10 < (bike1.x + 40) && (mainBike.x - 10 > bike1.x))
                    || (mainBike.x + 45 < (bike1.x + 75) && (mainBike.x + 45 > bike1.x))
                )
                && (mainBike.y > bike1.y
                    && mainBike.y < bike1.y + 70)
            )
            || ((mainBike.x + 25) < (bike1.x + 40)
                && (mainBike.x + 25 > bike1.x)
                && ((mainBike.y > bike1.y)
                    && (mainBike.y < bike1.y + 120))
            )
        ) {
            clearInterval(myGameArea.interval)
            document.getElementById('start-screen').style.display = 'block';
            document.getElementById('game').style.display = 'none'
        }
        else if (
            (
                (
                    (mainBike.x - 10 < (bike2.x + 40) && (mainBike.x - 10 > bike2.x))
                    || (mainBike.x + 45 < (bike2.x + 75) && (mainBike.x + 45 > bike2.x))
                )
                && (mainBike.y > bike2.y
                    && mainBike.y < bike2.y + 70)
            )
            || ((mainBike.x + 25) < (bike2.x + 40)
                && (mainBike.x + 25 > bike2.x)
                && ((mainBike.y > bike2.y)
                    && (mainBike.y < bike2.y + 120))
            )
        ) {
            clearInterval(myGameArea.interval)
            document.getElementById('start-screen').style.display = 'block';
            document.getElementById('game').style.display = 'none'
        }
        else if (
            (
                (
                    (mainBike.x - 10 < (bike3.x + 40) && (mainBike.x - 10 > bike3.x))
                    || (mainBike.x + 45 < (bike3.x + 75) && (mainBike.x + 45 > bike3.x))
                )
                && (mainBike.y > bike3.y
                    && mainBike.y < bike3.y + 70)
            )
            || ((mainBike.x + 25) < (bike3.x + 40)
                && (mainBike.x + 25 > bike3.x)
                && ((mainBike.y > bike3.y)
                    && (mainBike.y < bike3.y + 120
                    ))
            )
        ) {
            clearInterval(myGameArea.interval)
            document.getElementById('start-screen').style.display = 'block';
            document.getElementById('game').style.display = 'none'
        }


        // ctx.fillStyle = color;
        // ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
    myGameArea.clear();
    counter += 1;
    document.getElementById('counter').innerHTML = counter;
    car1.y += car1.speed
    car2.y += car2.speed;
    car3.y += car3.speed;
    car4.y += car4.speed
    bike1.y += bike1.speed
    bike2.y += bike2.speed
    bike3.y += bike3.speed
    if (right && mainBike.x + mainBike.speed < 560) {
        mainBike.x += mainBike.speed
    }
    if (left && mainBike.x - mainBike.speed >= -10) {
        mainBike.x -= mainBike.speed
    }
    if (down && mainBike.y + mainBike.speed <= 530) {
        mainBike.y += mainBike.speed
    }
    if (up && mainBike.y - mainBike.speed >= -10) {
        mainBike.y -= mainBike.speed
    }



    if (car1.y >= 600) {
        car1.y = -230;
        if (car3.speed < 10)
            car1.speed = Math.floor(Math.random() * 6) + 4
        else
            car1.speed -= 5
        car1.img = Math.floor(Math.random() * 3) + 1
    }
    if (car2.y >= 600) {
        car2.y = -230;
        if (car3.speed < 10)
            car2.speed = Math.floor(Math.random() * 6) + 4
        else
            car2.speed -= 5
        car2.img = Math.floor(Math.random() * 3) + 1
    }
    if (car3.y >= 600) {
        car3.y = -230;
        if (car3.speed < 10)
            car3.speed = Math.floor(Math.random() * 6) + 4
        else
            car3.speed -= 5
        car3.img = Math.floor(Math.random() * 3) + 1
    }
    if (car4.y >= 600) {
        car4.y = -230;
        if (car4.speed < 10)
            car4.speed = Math.floor(Math.random() * 6) + 4
        else
            car4.speed -= 5
        car4.img = Math.floor(Math.random() * 3) + 1
    }
    if (bike1.y >= 600) {
        setTimeout(() => {
            bike1.y = -140;
        }, 3000);

    }
    if (bike2.y >= 600) {
        setTimeout(() => {
            bike2.y = -140;
        }, 1500);

    }
    if (bike3.y >= 600) {
        setTimeout(() => {
            bike3.y = -140;
        }, 2500);

    }

    car1.update();
    car2.update();
    car3.update();
    car4.update();
    bike1.update();
    bike2.update();
    bike3.update();
    mainBike.update()

}
document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 38: //Para cima
            up = true;
            mainBike.update();

            break;
        case 40: //Para baixo
            down = true;
            mainBike.update();
            break;
        case 37: //Para esquerda
            left = true;
            mainBike.update();

            break;
        case 39: //Para direita
            right = true
            if ((mainBike.x + mainBike.speed == car1.x) || (mainBike.x + mainBike.speed == car2.x) || (mainBike.x + mainBike.speed == car3.x)) {
                clearInterval(myGameArea.interval)

            }
            mainBike.update();
            // mainBike.x += mainBike.speed;
            break;
        case 32:
            startGame()
            break;
    }
})
document.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
        case 38: //Para cima]
            up = false
            mainBike.update();
            break;
        case 40: //Para baixo
            down = false
            mainBike.update();
            break;
        case 37: //Para esquerda
            left = false
            mainBike.update();
            break;
        case 39: //Para direita
            right = false
            mainBike.update();
            // mainBike.x += mainBike.speed;

            break;
    }
})