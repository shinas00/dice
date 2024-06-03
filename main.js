var generatedNum1, generatedNum2;

function generate1 () {
    var num1 = Math.floor(Math.random() * 6) + 1;
    return num1;
}

function generate2 () {
    var num2 = Math.floor(Math.random() * 6) + 1;
    return num2;
}


    var link = document.querySelector('h1#h1id a')
    link.addEventListener("click", function() {
        var classes = document.querySelector("#leftDi .dot1").classList;
        var rem = classes.item(2);
        classes.remove(rem);
        var classes = document.querySelector("#rightDi .dot1").classList;
        var rem = classes.item(2);
        classes.remove(rem);
        var classes = document.querySelector("#leftDi .dot2").classList;
        var rem = classes.item(2);
        classes.remove(rem);
        var classes = document.querySelector("#rightDi .dot2").classList;
        var rem = classes.item(2);
        classes.remove(rem);
        var classes = document.querySelector("#leftDi .dot3").classList;
        var rem = classes.item(2);
        classes.remove(rem);
        var classes = document.querySelector("#rightDi .dot3").classList;
        var rem = classes.item(2);
        classes.remove(rem);
        var classes = document.querySelector("#leftDi .dot4").classList;
        var rem = classes.item(2);
        classes.remove(rem);
        var classes = document.querySelector("#rightDi .dot4").classList;
        var rem = classes.item(2);
        classes.remove(rem);
        var classes = document.querySelector("#leftDi .dot5").classList;
        var rem = classes.item(2);
        classes.remove(rem);
        var classes = document.querySelector("#rightDi .dot5").classList;
        var rem = classes.item(2);
        classes.remove(rem);
        var classes = document.querySelector("#leftDi .dot6").classList;
        var rem = classes.item(2);
        classes.remove(rem);
        var classes = document.querySelector("#rightDi .dot6").classList;
        var rem = classes.item(2);
        classes.remove(rem);

        generatedNum1 = generate1();
        generatedNum2 = generate2();
        console.log(generatedNum1, generatedNum2);
        if(generatedNum1 == 1){
            document.querySelector("#leftDi .dot1").classList.add("one");
            document.querySelector("#leftDi .dot2").classList.add("hidden");
            document.querySelector("#leftDi .dot3").classList.add("hidden");
            document.querySelector("#leftDi .dot4").classList.add("hidden");
            document.querySelector("#leftDi .dot5").classList.add("hidden");
            document.querySelector("#leftDi .dot6").classList.add("hidden");
        }else if(generatedNum1 == 2){
            document.querySelector("#leftDi .dot2").classList.add("hidden");
            document.querySelector("#leftDi .dot3").classList.add("hidden");
            document.querySelector("#leftDi .dot4").classList.add("hidden");
            document.querySelector("#leftDi .dot5").classList.add("hidden");
        }else if(generatedNum1 == 3){
            document.querySelector("#leftDi .dot2").classList.add("hidden");
            document.querySelector("#leftDi .dot3").classList.add("three");
            document.querySelector("#leftDi .dot4").classList.add("hidden");
            document.querySelector("#leftDi .dot5").classList.add("hidden");
            document.querySelector("#leftDi .dot6").classList.add("threesix")
        }else if(generatedNum1 == 4){
            document.querySelector("#leftDi .dot3").classList.add("hidden");
            document.querySelector("#leftDi .dot4").classList.add("hidden");
        }else if(generatedNum1 == 5){
            document.querySelector("#leftDi .dot3").classList.add("fivethree");
            document.querySelector("#leftDi .dot4").classList.add("hidden");
            document.querySelector("#leftDi .dot5").classList.add("fivefive");
            document.querySelector("#leftDi .dot6").classList.add("fivesix");
        }


        if(generatedNum2 == 1){
            document.querySelector("#rightDi .dot1").classList.add("one");
            document.querySelector("#rightDi .dot2").classList.add("hidden");
            document.querySelector("#rightDi .dot3").classList.add("hidden");
            document.querySelector("#rightDi .dot4").classList.add("hidden");
            document.querySelector("#rightDi .dot5").classList.add("hidden");
            document.querySelector("#rightDi .dot6").classList.add("hidden");
        } else if(generatedNum2 == 2){
            document.querySelector("#rightDi .dot2").classList.add("hidden");
            document.querySelector("#rightDi .dot3").classList.add("hidden");
            document.querySelector("#rightDi .dot4").classList.add("hidden");
            document.querySelector("#rightDi .dot5").classList.add("hidden");
        } else if(generatedNum2 == 3){
            document.querySelector("#rightDi .dot2").classList.add("hidden");
            document.querySelector("#rightDi .dot3").classList.add("three");
            document.querySelector("#rightDi .dot4").classList.add("hidden");
            document.querySelector("#rightDi .dot5").classList.add("hidden");
            document.querySelector("#rightDi .dot6").classList.add("threesix");
        }else if(generatedNum2 == 4){
            document.querySelector("#rightDi .dot3").classList.add("hidden");
            document.querySelector("#rightDi .dot4").classList.add("hidden");
        }else if(generatedNum2 == 5){
            document.querySelector("#rightDi .dot3").classList.add("fivethree");
            document.querySelector("#rightDi .dot4").classList.add("hidden");
            document.querySelector("#rightDi .dot5").classList.add("fivefive");
            document.querySelector("#rightDi .dot6").classList.add("fivesix");
        }

        if(generatedNum1 < generatedNum2){
            document.querySelector("h2").textContent = "Player 2 wins"
            document.querySelector("img#img2").style.visibility = "visible"
            document.querySelector("img#img1").style.visibility = "hidden"
        }else if (generatedNum2 < generatedNum1){
            document.querySelector("h2").textContent = "Player 1 wins"
            document.querySelector("img#img1").style.visibility = "visible"
            document.querySelector("img#img2").style.visibility = "hidden"
        }else if (generatedNum1 == generatedNum2){
            document.querySelector("h2").textContent = "Draw!!!"
            document.querySelector("img#img2").style.visibility = "hidden"
            document.querySelector("img#img1").style.visibility = "hidden"
        }
    });

