var canvas = new fabric.Canvas("mycanvas");
player_x = 10;
player_y = 10;
block_height = 30;
block_width = 30;
var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, left: player_x
        });
        canvas.add(player_object);
    });

}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y, left: player_x
        });
        canvas.add(block_object);
    });


}

window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    var kp = e.keyCode;
    console.log(kp);
    if (e.shiftKey == true && kp == '88') {
        console.log("x and shift key are pressed together");
        block_height = block_height + 10; block_width = block_width + 10;
        document.getElementById("w").innerHTML = block_width;
        document.getElementById("h").innerHTML = block_height;

    }

    if (e.shiftKey == true && kp == '89') {
        console.log(" y and shift key are pressed together");
        block_height = block_height - 10; block_width = block_width - 10;
        document.getElementById("w").innerHTML = block_width;
        document.getElementById("h").innerHTML = block_height;

    }

    if (kp == '37') {
        left();
        console.log("Towards left");
    }


    if (kp == '38') {
        up();

        console.log("Towards up");

    }
    if (kp == '39') {
        right();

        console.log("Towards right");

    }
    if (kp == '40') {
        down();

        console.log("Towards down");

    }

    if (kp == '87') {
        new_image("wall.jpg");

        console.log("wall");

    }
    if (kp == '85') {
        new_image("unique.png");

        console.log("unique");

    }
    if (kp == '68') {
        new_image("dark_green.png");

        console.log("dg");

    }
    if (kp == '76') {
        new_image("light_green.png");

        console.log("lg");

    }
    if (kp == '67') {
        new_image("cloud.jpg");

        console.log("c");

    }
    if (kp == '71') {
        new_image("ground.png");

        console.log("g");

    }
    if (kp == '84') {
        new_image("trunk.jpg");

        console.log("trunk");

    }
    if (kp =='72') {
        new_image("yellow_wall.png");

        console.log("yw");

    }
    if (kp == '82') {
        new_image("roof.jpg");

        console.log("roof");

    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - block_height;
        console.log("height of block is" + block_height);
        console.log("players x is" + player_x + "player y is" + player_y);
        canvas.remove(player_object);
        player_update();

    }

}

function down() {
    if (player_y <= 600) {
        player_y = player_y + block_height;
        console.log("height of block is" + block_height);
        console.log("players x is" + player_x + "player y is" + player_y);
        canvas.remove(player_object);
        player_update();

    }

}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_width;
        console.log("width of block is" + block_width);
        console.log("players x is" + player_x + "player y is" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 800) {
        player_x = player_x + block_width;
        console.log("width of block is" + block_width);
        console.log("players x is" + player_x + "player y is" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}