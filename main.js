let aktivSpelare = 1;
let tillfälligPoäng = 0;
let totalPoäng1 = 0;
let totalPoäng2 = 0;

function Kasta() {
    let tärning = Math.floor(Math.random() * 6) + 1;

    if (tärning === 1) {
        tillfälligPoäng = 0;
        uppdateraNuvarande();
        document.getElementById("tarning").src="/bilder/dice-152173_640.png"
        bytSpelare();
    }
    else if (tärning === 2) {
        tillfälligPoäng += tärning;
        uppdateraNuvarande();
        document.getElementById("tarning").src="/bilder/dice-152174_640.png"
    }
    else if (tärning === 3) {
        tillfälligPoäng += tärning;
        uppdateraNuvarande();
        document.getElementById("tarning").src="/bilder/dice-152175_640.png"
    }
    else if (tärning === 4) {
        tillfälligPoäng += tärning;
        uppdateraNuvarande();
        document.getElementById("tarning").src="/bilder/dice-152176_640.png"
    }
    else if (tärning === 5) {
        tillfälligPoäng += tärning;
        uppdateraNuvarande();
        document.getElementById("tarning").src="/bilder/dice-152177_640.png"
    }
    else if (tärning === 6) {
        tillfälligPoäng += tärning;
        uppdateraNuvarande();
        document.getElementById("tarning").src="/bilder/dice-152178_640.png"
    }
}

function Hålla() {
    if (aktivSpelare === 1) {
        totalPoäng1 += tillfälligPoäng;
        document.getElementById("Poäng1").textContent = "Total: " + totalPoäng1;
        if (totalPoäng1 >= 100) {
            alert("Spelare 1 vann");
            nyttspel();
            return;
        }
    } else {
        totalPoäng2 += tillfälligPoäng;
        document.getElementById("Poäng2").textContent = "Total: " + totalPoäng2;
        if (totalPoäng2 >= 100) {
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
    uppdateraTurText()}