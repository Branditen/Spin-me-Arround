// document.getElementById("spinButton").addEventListener("click", function() {
//     this.classList.toggle("rotate");
// });

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

const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const confirmChange = document.getElementById("confirmChange");
const closePopup = document.getElementById("closePopup");
const backgroundSelector = document.getElementById("backgroundSelector");

const developerButton = document.getElementById("developerMode");

let maxColorLevel = 0; // Nivel de color alcanzado
let fondosDesbloqueados = ["#f0f0f0"]; // Color blanco por defecto

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

    if (!modoDevActivo){
        if (clickCount > 1799){
            newColor = "#8c25fa"; // Violet
            newLevel = 8;
            colorName = "Violet";
            maxColorLevel = newLevel;
        } else if (clickCount > 999){
            newColor = "#25faea"; // Turquesa
            newLevel = 7;
            colorName = "Turquoise";
            maxColorLevel = newLevel;
        } else if (clickCount > 599) {
            newColor = "#fc0f1d"; // Rojo
            newLevel = 6;
            colorName = "Red";
            maxColorLevel = newLevel;
        } else if (clickCount > 299) {
            newColor = "#fc0fe6"; // Fuxia
            newLevel = 5;
            colorName = "Fuxia";
            maxColorLevel = newLevel;
        } else if (clickCount > 149) {
            newColor = "#74fc0f"; // Verde
            newLevel = 4;
            colorName = "Green";
            maxColorLevel = newLevel;
        } else if (clickCount > 79) {
            newColor = "#f4cf14"; // Dorado
            newLevel = 3;
            colorName = "Gold";
            maxColorLevel = newLevel;
        } else if (clickCount > 29) {
            newColor = "#007BFF"; // Azul
            newLevel = 2;
            colorName = "Blue";
            maxColorLevel = newLevel;
        } else if (clickCount > 14) {
            newColor = "#646464"; // Gris
            newLevel = 1;
            colorName = "Grey";
            maxColorLevel = newLevel;
        }
        //grey, blue, gold, green, fuxia, red, turquoise, violet
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
        alert("You can't buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
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
        alert("You can't buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
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
        alert("You can't buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
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
        alert("You can't buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
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
        alert("You can't buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
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
        alert("You can't buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
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
        alert("You can't buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
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
        alert("You can't buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
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
        alert("You can't buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
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
        alert("You can't buy anything while the timer is on. Please wait until it stops or reset manually. Thank you :).")
    }  
});

openPopup.addEventListener("click", function() {
    desbloquearFondos(); // Actualiza las opciones antes de abrir el pop-up
    popup.style.display = "block";
    document.addEventListener("click", function(event) {
        if (popup.style.display === "block" && !popup.contains(event.target) && event.target !== openPopup) {
            popup.style.display = "none";
        }
    });
});

closePopup.addEventListener("click", function() {
    popup.style.display = "none";
});

confirmChange.addEventListener("click", function() {
    let selectedBackground = backgroundSelector.value;
    cambiarFondo(selectedBackground);
    popup.style.display = "none";
});

// Función para desbloquear fondos según el nivel alcanzado
function desbloquearFondos() {
    const opciones = backgroundSelector.options;
    for (let i = 1; i < opciones.length; i++) {
        if (i <= maxColorLevel) {
            opciones[i].disabled = false;
        } else {
            opciones[i].disabled = true;
        }
    }
}

// Función para cambiar el fondo
// function cambiarFondo(fondo) {
//     switch (fondo) {
//         case "fondo1":
//             document.body.style.background = "linear-gradient(to right, #FFD700, #FFCC00)"; // Grey
//             break;
//         case "fondo2":
//             document.body.style.background = "linear-gradient(to right, #74fc0f, #4CAF50)"; // Blue
//             break;
//         case "fondo3":
//             document.body.style.background = "linear-gradient(to right, #fc0fe6, #8B00FF)"; // Gold
//             break;
//         case "fondo4":
//             document.body.style.background = "linear-gradient(to right, #fc0f1d, #FF0000)"; // Green
//             break;
//         case "fondo5":
//             document.body.style.background = "linear-gradient(to right, #fc0f1d, #FF0000)"; // Fuxia
//             break;
//         case "fondo6":
//             document.body.style.background = "linear-gradient(to right, #fc0f1d, #FF0000)"; // Red
//             break;
//         case "fondo7":
//             document.body.style.background = "linear-gradient(to right, #fc0f1d, #FF0000)"; // Turquoise
//             break;
//         case "fondo8":
//             document.body.style.background = "linear-gradient(to right, #fc0f1d, #FF0000)"; // Violet
//             break;
//         case "fondo9":
//             document.body.style.background.color = "#f0f0f0"; // galactic
//             document.body.style.background.image = url("./src/galaxy_backround.jpg");
//             document.body.style.background.size = cover;
//             document.body.style.background.position = center;
//             document.body.style.background.repeat = no-repeat;
//             break;
//         default:
//             document.body.style.background = "#f0f0f0";
//             document.body.style.background.image = none;
//     }
// }

function cambiarFondo(fondo) {
    switch (fondo) {
        case "fondo1":
            document.body.style.background = "linear-gradient(to right,rgb(177, 177, 177),rgb(99, 99, 99))"; // Grey
            break;
        case "fondo2":
            document.body.style.background = "linear-gradient(to right,rgb(63, 82, 255),rgb(24, 34, 173))"; // Blue
            break;
        case "fondo3":
            document.body.style.background = "linear-gradient(to right,rgb(172, 155, 8),rgb(196, 192, 7))"; // Gold
            break;
        case "fondo4":
            document.body.style.background = "linear-gradient(to right,rgb(15, 252, 15),rgb(95, 199, 69))"; // Green
            break;
        case "fondo5":
            document.body.style.background = "linear-gradient(to right,rgb(255, 44, 237),rgb(250, 117, 239))"; // Fuxia
            break;
        case "fondo6":
            document.body.style.background = "linear-gradient(to right, #fc0f1d,rgb(112, 17, 17))"; // Red
            break;
        case "fondo7":
            document.body.style.background = "linear-gradient(to right,rgb(31, 255, 206),rgb(6, 122, 117))"; // Turquoise
            break;
        case "fondo8":
            document.body.style.background = "linear-gradient(to right,rgb(165, 15, 252),rgb(102, 10, 114))"; // Violet
            break;
        case "fondo9":
            document.body.style.background.color = "#f0f0f0"; // galactic
            document.body.style.backgroundImage = "url('src/galaxy_backround.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
            break;
        default:
            document.body.style.background = "#f0f0f0";
            document.body.style.background.image = null;
    }
}

// ⚡ Actualizar el nivel máximo de color alcanzado
// function actualizarColorMaximo(color) {
//     const niveles = {
//         "#000000": 1, // Black
//         "#646464": 1, // Grey
//         "#007BFF": 2, // Blue
//         "#f4cf14": 3, // Gold
//         "#74fc0f": 4, // Green
//         "#fc0fe6": 5, // Fuxia
//         "#fc0f1d": 6, // Red
//         "#25faea": 7, // Turquoise
//         "#8c25fa": 8, // Violet

//         // grey, blue, gold, green, fuxia, red, turquoise, violet
//     };
    
//     if (niveles[color] && niveles[color] > maxColorLevel) {
//         maxColorLevel = niveles[color]; // Se actualiza el nivel
//     }
// }

const fondosDesbloqueables = {
    2: ["#646464", "#007BFF"], // Grey and Blue
    3: ["#f4cf14", "#74fc0f"], // Gold and Green (colores)
    4: ["url('./src/galaxy_backround.jpg')"] // Fondo con imagen en Nivel 4
};

function actualizarFondoMaximo(nivel) {
    if (nivel > maxColorLevel) {
        maxColorLevel = nivel;
        fondosDesbloqueados.push(...fondosDesbloqueables[nivel]); // Agrega los fondos desbloqueados (colores o imágenes)
    }
}

// function desbloquearFondos() {
//     const opciones = document.getElementById("backgroundSelector").options;
//     for (let i = 0; i < opciones.length; i++) {
//         if (fondosDesbloqueados.includes(opciones[i].value)) {
//             opciones[i].disabled = false; // Habilita el fondo si está desbloqueado
//         }
//     }
// }

document.getElementById("backgroundSelector").addEventListener("change", function() {
    const fondoSeleccionado = this.value;
    document.body.style.background = fondoSeleccionado;
    document.body.style.backgroundSize = "cover"; // Ajusta la imagen de fondo
});

const colours = ["red", "orange", "yellow", "green", "blue"];
let indice = 0;
let intervaloColor = null; // Variable para almacenar el intervaloColor
let modoDevActivo = false; // Para saber si está en Developer Mode

developerButton.addEventListener("click", function() {
    coins = 9999999;
    coinsText.textContent = coins;
    highestLevel = 9;
    maxColorLevel = 9;
    highestColorText.textContent = "Multicolor";
    highestColorText.style.color = "#8c25fa"; // Cambiar color del texto
    extraTime = 40;
    multiplier = 20;
    
    clearInterval(interval);
    timerActive = false;
    clickCount = 0;
    counter.textContent = clickCount; // Reinicia el contador en pantalla
    timer.style.color = "#000000"
    timerText.textContent = `Time: ${50}s`

    if (intervaloColor) {
        button.classList.remove("devBtn")
        clearInterval(intervaloColor); // Si ya está corriendo, lo detiene
        intervaloColor = null; // Restablece la variable
        modoDevActivo = false;
        coins = 0;
        coinsText.textContent = coins;
        highestLevel = 0;
        maxColorLevel = 0;
        highestColorText.textContent = "None";
        highestColorText.style.color = "#000000"; // Cambiar color del texto
        multiplier = 1;
        
        clearInterval(interval);
        timerActive = false;
        clickCount = 0;
        counter.textContent = clickCount; // Reinicia el contador en pantalla
        button.style.backgroundColor = "#000000"; // nergro original
        timer.style.color = "#000000"

        extraTime = 0;
        timeLeft = 10;
        oldTime = 10;
        timerText.textContent = `Time: ${10}s`; // Restablece el tiempo visualmente
    } else {
        
        
        button.classList.add("devBtn");
        intervaloColor = setInterval(() => {
            button.style.backgroundColor = colours[indice];
            indice = (indice + 1) % colours.length; // Avanza cíclicamente
        }, 500); // Cambia de color cada 500ms (medio segundo)
        modoDevActivo = true;
    }
});