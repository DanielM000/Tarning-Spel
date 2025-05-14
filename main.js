let aktivSpelare = 1;
let tillfälligPoäng = 0;
let totalPoäng1 = 0;
let totalPoäng2 = 0;

function Kasta() {
    let tärning = Math.floor(Math.random() * 6) + 1;
    document.getElementById("Tärning").textContent = "Du kastade: " + tärning;

    if (tärning === 1) {
        tillfälligPoäng = 0;
        uppdateraNuvarande();
        bytSpelare();
    } else {
        tillfälligPoäng += tärning;
        uppdateraNuvarande();
    }
}

function Hålla() {
    if (aktivSpelare === 1) {
        totalPoäng1 += tillfälligPoäng;
        document.getElementById("Poäng1").textContent = "Total: " + totalPoäng1;
        if (totalPoäng1 >= 20) {
            alert("Spelare 1 vann");
            nyttspel();
            return;
        }
    } else {
        totalPoäng2 += tillfälligPoäng;
        document.getElementById("Poäng2").textContent = "Total: " + totalPoäng2;
        if (totalPoäng2 >= 20) {
            alert("Spelare 2 van");
            nyttspel();
            return;
        }
    }

    tillfälligPoäng = 0;
    uppdateraNuvarande();
    bytSpelare();
}

function Skippa() {
    tillfälligPoäng = 0;
    uppdateraNuvarande();
    bytSpelare();
}

function bytSpelare() {
    tillfälligPoäng = 0;
    aktivSpelare = aktivSpelare === 1 ? 2 : 1;
    uppdateraTurText();
}

function uppdateraNuvarande() {
    if (aktivSpelare === 1) {
        document.getElementById("Nuvarande1").textContent = "Nuvarande: " + tillfälligPoäng;
        document.getElementById("Nuvarande2").textContent = "Nuvarande: 0";
    } else {
        document.getElementById("Nuvarande2").textContent = "Nuvarande: " + tillfälligPoäng;
        document.getElementById("Nuvarande1").textContent = "Nuvarande: 0";
    }
}

function uppdateraTurText() {
    document.getElementById("TurText").textContent = "Tur: Spelare " + aktivSpelare;
}

function nyttspel() {
    aktivSpelare = 1;
    tillfälligPoäng = 0;
    totalPoäng1 = 0;
    totalPoäng2 = 0;

    document.getElementById("Poäng1").textContent = "Total: ";
    document.getElementById("Poäng2").textContent = "Total: ";
    document.getElementById("Nuvarande1").textContent = "Nuvarande: ";
    document.getElementById("Nuvarande2").textContent = "Nuvarande: ";
    document.getElementById("Tärning").textContent = "Tärning(För senare extra funktioner)";
    uppdateraTurText();
}