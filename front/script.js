document.getElementById("spinButton").addEventListener("click", function() {
    this.classList.toggle("rotate");
});

let rotation = 0;
let clickCount = 0;
let highestLevel = 0;
let coins = 0;
let multiplier = 1; // Inicia sin mejoras
let timerActive = false;
let timeLeft = 10;
let interval;
let extraTime = 0;
let oldTime = 0;
let buttonColorx2;
let buttonColorx3;
let buttonColorx4;
let buttonColorx8;

const button = document.getElementById("spinButton");
const counter = document.getElementById("counter");
const highestColorText = document.getElementById("highestColor");
const coinsText = document.getElementById("coins");
const doublePointsBtn = document.getElementById("doublePoints");
const triplePointsBtn = document.getElementById("triplePoints");
const quadruplePointsBtn = document.getElementById("quadruplePoints");
const quintuplePointsBtn = document.getElementById("quintuplePoints");
const sextuplePointsBtn = document.getElementById("sextuplePoints");
const septuplePointsBtn = document.getElementById("septuplePoints");
const octuplePointsBtn = document.getElementById("octuplePoints");

const timerText = document.getElementById("timer");
const addTimeButton1 = document.getElementById("addTime1");
const addTimeButton2 = document.getElementById("addTime2");
const addTimeButton3 = document.getElementById("addTime3");
const resetButton = document.getElementById("resetTimer");

button.addEventListener("click", function() {
    if (!timerActive) {
        startTimer();
    }
    
    rotation += 360;
    clickCount += 1 * multiplier;
    coins += 0.25 * multiplier; // Ganas monedas según la mejora
    this.style.transform = `rotate(${rotation}deg)`;

    counter.textContent = clickCount;
    coinsText.textContent = coins;

    let newColor = "";
    let newLevel = 0;
    let colorName = "";

    if (clickCount > 1799){
        newColor = "#8c25fa"; // Violet
        newLevel = 9;
        colorName = "Violet";
    } else if (clickCount > 999){
        newColor = "#25faea"; // Turquesa
        newLevel = 8;
        colorName = "Turquoise";
    } else if (clickCount > 599) {
        newColor = "#fc0f1d"; // Rojo
        newLevel = 7;
        colorName = "Red";
    } else if (clickCount > 299) {
        newColor = "#fc0fe6"; // Fuxia
        newLevel = 6;
        colorName = "Fuxia";
    } else if (clickCount > 149) {
        newColor = "#74fc0f"; // Verde
        newLevel = 5;
        colorName = "Green";
    } else if (clickCount > 79) {
        newColor = "#f4cf14"; // Dorado
        newLevel = 4;
        colorName = "Gold";
    } else if (clickCount > 29) {
        newColor = "#007BFF"; // azul
        newLevel = 3;
        colorName = "Blue";
    } else if (clickCount > 14) {
        newColor = "#646464"; // gris
        newLevel = 2;
        colorName = "Grey";
    }

    // Solo actualizar si el nivel es más alto
    if (newLevel > highestLevel) {
        highestLevel = newLevel;
        highestColorText.textContent = colorName;
        highestColorText.style.color = newColor; // Cambiar color del texto
    }

    // Aplicar color al botón
    if (newColor !== "") {
        button.style.backgroundColor = newColor;
    }
});

function startTimer() {
    timerActive = true;
    timer.style.color = "#ff0000"
    timeLeft = 10 + extraTime;
    timerText.textContent = `Time: ${timeLeft}s`;
    oldTime = timeLeft;
    interval = setInterval(() => {
        timeLeft--;
        timerText.textContent = `Time: ${timeLeft}s`;
        
        resetButton.addEventListener("click", function() {
            clearInterval(interval); // Detiene el temporizador
            timerActive = false; // Hace que el temporizador espere el primer clic nuevamente
            clickCount = 0;
            counter.textContent = clickCount; // Reinicia el contador en pantalla
            button.style.backgroundColor = "#000000"; // nergro original
            timer.style.color = "#000000"
            timerText.textContent = `Time: ${oldTime}s`;
        });

        if (timeLeft <= 0) {
            clearInterval(interval);
            timerActive = false;
            clickCount = 0;
            counter.textContent = clickCount; // Reinicia el contador en pantalla
            button.style.backgroundColor = "#000000"; // nergro original
            timer.style.color = "#000000"
            timerText.textContent = `Time: ${oldTime}s`; // Restablece el tiempo visualmente
        }
    }, 1000);
}
// Comprar Doble Giro
doublePointsBtn.addEventListener("click", function() {
    if (!timerActive) {
        if (multiplier > 0 && multiplier < 2) {
            if (coins >= 50) {
                coins -= 50;
                multiplier = 2;
                coinsText.textContent = coins;
                doublePointsBtn.style.backgroundColor = "#28a745"
                alert("¡Now your spins is multiplied by 2!");
            } else {
                alert("You don't have enough coins.");
            }
        }  else {
            alert("You already have this upgrade or you have a better one.");
            let buttonColorx2 = window.getComputedStyle(doublePointsBtn).backgroundColor;
            let buttonColorx3 = window.getComputedStyle(triplePointsBtn).backgroundColor;
            let buttonColorx4 = window.getComputedStyle(quadruplePointsBtn).backgroundColor;
            let buttonColorx8 = window.getComputedStyle(octuplePointsBtn).backgroundColor;
            console.log(buttonColorx2, buttonColorx3, buttonColorx4)
            if (buttonColorx8 === rgb(40, 167, 69) && buttonColorx4 !== "rgb(40, 167, 69)" && buttonColorx3 !== "rgb(40, 167, 69)" && buttonColorx2 && "rgb(40, 167, 69)") {
                doublePointsBtn.style.backgroundColor = "#8c25fa";
            }
        }
    } else {
        alert("You cant buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
    }
});

// Comprar Triple Giro
triplePointsBtn.addEventListener("click", function() {
    if (!timerActive) {
        if (multiplier > 0 && multiplier < 3) {
            if (coins >= 100) {
                coins -= 100;
                multiplier = 3;
                coinsText.textContent = coins;
                triplePointsBtn.style.backgroundColor = "#28a745"
                alert("¡Now your spins is multiplied by 3!");
                
            } else {
                alert("You don't have enough coins.");
            }
        } else {
            alert("You already have this upgrade or you have a better one.");
            let buttonColorx2 = window.getComputedStyle(doublePointsBtn).backgroundColor;
            let buttonColorx3 = window.getComputedStyle(triplePointsBtn).backgroundColor;
            let buttonColorx4 = window.getComputedStyle(quadruplePointsBtn).backgroundColor;
            console.log(buttonColorx2, buttonColorx3, buttonColorx4)
            if (buttonColorx4 !== "rgb(40, 167, 69)" && buttonColorx3 !== "rgb(40, 167, 69)" && buttonColorx2 && "rgb(40, 167, 69)") {
                triplePointsBtn.style.backgroundColor = "#8c25fa";
            }
        }
    } else {
        alert("You cant buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
    }
});

// Comprar Triple Giro
quadruplePointsBtn.addEventListener("click", function() {
    if (!timerActive) {
        if (multiplier > 0 && multiplier < 4) {
            if (coins >= 200) {
                coins -= 200;
                multiplier = 4;
                coinsText.textContent = coins;
                quadruplePointsBtn.style.backgroundColor = "#28a745"
                alert("¡Now your spins is multiplied by 4!");
            } else {
                alert("You don't have enough coins.");
            }
        } else {
            alert("You already have this upgrade or you have a better one.");
            let buttonColorx2 = window.getComputedStyle(doublePointsBtn).backgroundColor;
            let buttonColorx3 = window.getComputedStyle(triplePointsBtn).backgroundColor;
            let buttonColorx4 = window.getComputedStyle(quadruplePointsBtn).backgroundColor;
            console.log(buttonColorx2, buttonColorx3, buttonColorx4)
            if (buttonColorx4 !== "rgb(40, 167, 69)" && buttonColorx3 !== "rgb(40, 167, 69)" && buttonColorx2 && "rgb(40, 167, 69)") {
                quadruplePointsBtn.style.backgroundColor = "#8c25fa";
            }
        }
    } else {
        alert("You cant buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
    }    
});

// Comprar Triple Giro
quintuplePointsBtn.addEventListener("click", function() {
    if (!timerActive) {
        if (multiplier > 0 && multiplier < 5) {
            if (coins >= 450) {
                coins -= 450;
                multiplier = 5;
                coinsText.textContent = coins;
                quintuplePointsBtn.style.backgroundColor = "#28a745"
                alert("¡Now your spins is multiplied by 5!!!");
            } else {
                alert("You don't have enough coins.");
            }
        } else {
            alert("You already have this upgrade or you have a better one.");
        }
    } else {
        alert("You cant buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
    }  
});

sextuplePointsBtn.addEventListener("click", function() {
    if (!timerActive) {
        if (multiplier > 0 && multiplier < 6) {
            if (coins >= 900) {
                coins -= 900;
                multiplier = 6;
                coinsText.textContent = coins;
                sextuplePointsBtn.style.backgroundColor = "#28a745"
                alert("¡Now your spins is multiplied by 6!!!1!!");
            } else {
                alert("You don't have enough coins.");
            }
        } else {
            alert("You already have this upgrade or you have a better one.");
        }
    }  else {
        alert("You cant buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
    }  
});

septuplePointsBtn.addEventListener("click", function() {
    if (!timerActive) {
        if (multiplier > 0 && multiplier < 7) {
            if (coins >= 1500) {
                coins -= 1500;
                multiplier = 7;
                coinsText.textContent = coins;
                septuplePointsBtn.style.backgroundColor = "#28a745"
                alert("¡Now your spins is MULTIPLIED BY 7!!!");
            } else {
                alert("You don't have enough coins.");
            }
        } else {
            alert("You already have this upgrade or you have a better one.");
        }
    }  else {
        alert("You cant buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
    }  
});

octuplePointsBtn.addEventListener("click", function() {
    if (!timerActive) {
        if (multiplier > 0 && multiplier < 8) {
            if (coins >= 3000) {
                coins -= 3000;
                multiplier = 8;
                coinsText.textContent = coins;
                octuplePointsBtn.style.backgroundColor = "#28a745"
                alert("You must be crazy, man.");
            } else {
                alert("You don't have enough coins.");
            }
        } else {
            alert("You already have this upgrade or you have a better one.");
        }
    }  else {
        alert("You cant buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
    }  
});

addTimeButton1.addEventListener("click", function() {
    if (!timerActive) {
        if (extraTime >= 0 && extraTime < 5) {
            if (coins >= 10) { // Verifica si el jugador tiene suficientes monedas
                coins -= 10; // Resta 10 monedas
                coinsText.textContent = coins;
                extraTime = 5; // Suma 5 segundos al temporizador
                timerText.textContent = `Time: 15s`;
                addTimeButton1.style.backgroundColor = "#28a745"
                alert("¡Now you have 15 seconds!");
            } else {
                alert("You don't have enough coins to buy time.");
            }
        } else {
            console.log("hola. Extra time = ", extraTime);
            alert("You already have this upgrade or you have more seconds than this.");
        }
    }  else {
        alert("You cant buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
    }  
});

addTimeButton2.addEventListener("click", function() {
    if (!timerActive) {
        if (extraTime >= 0 && extraTime < 8) {
            if (coins >= 100) { // Verifica si el jugador tiene suficientes monedas
                coins -= 100; // Resta 100 monedas
                coinsText.textContent = coins;
                extraTime = 8; // Suma 8 segundos al temporizador
                timerText.textContent = `Time: 18s`;
                addTimeButton2.style.backgroundColor = "#28a745"
                alert("¡Now you have 18 seconds!");
            } else {
                alert("You don't have enough coins to buy time.");
            }
        } else {
            console.log("hola. Extra time = ", extraTime);
            alert("You already have this upgrade or you have more seconds than this.");
        }
    }  else {
        alert("You cant buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
    }  
});

addTimeButton3.addEventListener("click", function() {
    if (!timerActive) {
        if (extraTime >= 0 && extraTime < 10) {
            if (coins >= 1000) { // Verifica si el jugador tiene suficientes monedas
                coins -= 1000; // Resta 1000 monedas
                coinsText.textContent = coins;
                extraTime = 10; // Suma 10 segundos al temporizador
                timerText.textContent = `Time: 20s`;
                addTimeButton3.style.backgroundColor = "#28a745"
                alert("¡Now you have 20 seconds!");
            } else {
                alert("You don't have enough coins to buy time.");
            }
        } else {
            console.log("hello. Extra time = ", extraTime);
            alert("You already have this upgrade or you have more seconds than this.");
        }
    }  else {
        alert("You cant buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
    }  
});