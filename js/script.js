
function setMarker(index) {
    switch (index) {
        case 1:
            console.log('first')
            document.getElementById('marker1').style.width = '64px';
            document.getElementById('marker2').style.width = '20px';
            document.getElementById('marker3').style.width = '20px';
            document.getElementById('marker4').style.width = '20px';
            break;
        case 2:
            document.getElementById('marker2').style.width = '95px';
            document.getElementById('marker1').style.width = '20px';
            document.getElementById('marker3').style.width = '20px';
            document.getElementById('marker4').style.width = '20px';
            break;
        case 3:
            document.getElementById('marker3').style.width = '151px';
            document.getElementById('marker2').style.width = '20px';
            document.getElementById('marker1').style.width = '20px';
            document.getElementById('marker4').style.width = '20px';
            break;
        case 4:
            document.getElementById('marker4').style.width = '83px';
            document.getElementById('marker2').style.width = '20px';
            document.getElementById('marker3').style.width = '20px';
            document.getElementById('marker1').style.width = '20px';
            break;
        case 5:
            document.getElementById('marker5').style.width = '92px';
            document.getElementById('marker4').style.width = '20px';
            document.getElementById('marker2').style.width = '20px';
            document.getElementById('marker3').style.width = '20px';
            document.getElementById('marker1').style.width = '20px';
            break;
        case 10:
            document.getElementById('marker5').style.width = '20px';
            document.getElementById('marker4').style.width = '20px';
            document.getElementById('marker2').style.width = '20px';
            document.getElementById('marker3').style.width = '20px';
            document.getElementById('marker1').style.width = '20px';
            break;
    }
}

function blurDiv(index, blur) {
    if (blur) {
        switch (index) {
            case 1:
                document.getElementById('second-picture').style.filter = 'blur(5px)';
                document.getElementById('third-picture').style.filter = 'blur(5px)';
                break;
            case 2:
                document.getElementById('first-picture').style.filter = 'blur(5px)';
                document.getElementById('third-picture').style.filter = 'blur(5px)';
                break;
            case 3:
                document.getElementById('first-picture').style.filter = 'blur(5px)';
                document.getElementById('second-picture').style.filter = 'blur(5px)';
                break;
        }
    } else {
        switch (index) {
            case 1:
                document.getElementById('second-picture').style.filter = 'none';
                document.getElementById('third-picture').style.filter = 'none';
                break;
            case 2:
                document.getElementById('first-picture').style.filter = 'none';
                document.getElementById('third-picture').style.filter = 'none';
                break;
            case 3:
                document.getElementById('first-picture').style.filter = 'none';
                document.getElementById('second-picture').style.filter = 'none';
                break;
        }
    }
}

function sendMessage() {
    let n = document.getElementById('input-name').value;
    let e = document.getElementById('input-email').value;
    let m = document.getElementById('text-message').value;
    socket.emit('message', [n, e, m]);
    document.getElementById('notification').style.top = '160px';
    document.getElementById('notification').style.opacity = '1';
    setTimeout(() => {
        document.getElementById('notification').style.top = '0';
        document.getElementById('notification').style.opacity = '0';
    }, 3000);

}

function navigate(page) {
    switch (page) {
        case 0:

        getUsers();
            document.getElementById('contact').style.display = 'none';
            document.getElementById('team').style.display = 'block';
            document.getElementById('photos').style.display = 'none';
            document.getElementById('team-li').style.color = 'rgb(252, 178, 40)';
            document.getElementById('photos-li').style.color = 'black';
            document.getElementById('contact-li').style.color = 'black';
            document.getElementById('fun-li').style.color = 'black';
            document.getElementById('body').style.background = '#fff';
            document.getElementById('home').style.display = 'none';
            document.getElementById('home-li').style.color = 'black';
            document.getElementById('fun').style.display = 'none';
            setTimeout(() => {
                document.getElementById('team').style.opacity = '1';
            }, 100);
            break;
        case 1:
            document.getElementById('contact').style.display = 'none';
            document.getElementById('team').style.display = 'none';
            document.getElementById('home').style.display = 'block';
            document.getElementById('photos').style.display = 'none';
            document.getElementById('home-li').style.color = 'rgb(252, 178, 40)';
            document.getElementById('team-li').style.color = 'black'
            document.getElementById('photos-li').style.color = 'black';
            document.getElementById('contact-li').style.color = 'black';
            document.getElementById('fun-li').style.color = 'black';
            document.getElementById('body').style.background = '#fff';
            document.getElementById('fun').style.display = 'none';
            document.getElementById('team').style.opacity = '0';
            break;
        case 2:
            document.getElementById('contact').style.display = 'none';
            document.getElementById('team').style.display = 'none';
            document.getElementById('fun-li').style.color = 'black';
            document.getElementById('photos').style.display = 'block';
            document.getElementById('body').style.background = '#0f0f0f';
            document.getElementById('home').style.display = 'none';
            document.getElementById('photos-li').style.color = 'rgb(252, 178, 40)';
            document.getElementById('team-li').style.color = 'black';
            document.getElementById('contact-li').style.color = 'black';
            document.getElementById('team').style.opacity = '0';
            document.getElementById('home-li').style.color = 'black';
            document.getElementById('fun').style.display = 'none';
            break;
        case 3:
            document.getElementById('team').style.display = 'none';
            document.getElementById('contact').style.display = 'block';
            document.getElementById('fun-li').style.color = 'black';
            document.getElementById('home').style.display = 'none';
            document.getElementById('photos').style.display = 'none';
            document.getElementById('contact-li').style.color = 'rgb(252, 178, 40)';
            document.getElementById('photos-li').style.color = 'black';
            document.getElementById('team-li').style.color = 'black';
            document.getElementById('body').style.background = '#fff';
            document.getElementById('team').style.opacity = '0';
            document.getElementById('home-li').style.color = 'black';
            document.getElementById('fun').style.display = 'none';
            break;
        case 4:
            document.getElementById('team').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
            document.getElementById('fun').style.display = 'block';
            document.getElementById('home').style.display = 'none';
            document.getElementById('fun-li').style.color = 'rgb(252, 178, 40)';
            document.getElementById('photos').style.display = 'none';
            document.getElementById('contact-li').style.color = 'black';
            document.getElementById('photos-li').style.color = 'black';
            document.getElementById('team-li').style.color = 'black';
            document.getElementById('body').style.background = 'black';
            document.getElementById('team').style.opacity = '0';
            document.getElementById('home-li').style.color = 'black';
            break;

    }
}


function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function () {
    moveToSelected($(this));
});

$('#prev').click(function () {
    moveToSelected('prev');
});

$('#next').click(function () {
    moveToSelected('next');
});

function getUsers() {
    socket.emit('fetch_user')
  }


