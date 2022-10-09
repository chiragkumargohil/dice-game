document.querySelector("button").addEventListener("click", function () {
    // for img1
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var changedImg1 = "images\\dice"+randomNumber1+".png";

    document.querySelector(".img1").setAttribute("src", changedImg1);

    // for img2
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var changedImg2 = "images\\dice"+randomNumber2+".png";

    document.querySelector(".img2").setAttribute("src", changedImg2);

    // result

    var result = "Refresh Me";

    if (randomNumber1 > randomNumber2) {
        result = "Player 1 Wins";
    }

    else if (randomNumber1 < randomNumber2) {
        result = "Player 2 Wins";
    }

    else {
        result = "Draw!"
    }

    document.querySelector("h1").innerHTML = result;
});